import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Modal, Col, Button, Row, Form, Card } from "react-bootstrap";

import iconImage from "../../assets/images/N_Icon2_Transparent.png"
import { QUERY_QUOTE_RESULT } from '../../utils/queries';

const QuoteCard = React.lazy(() => import("../QuoteCard"));

function NavBar() {
    const [show, setShow] = useState(false);
    const [showSM, setShowSM] = useState(false);
    const [buttonDisabled, setAbility] = useState(true)
    const [buttonDisabledSM, setAbilitySM] = useState(true)
    const value = useRef('');
    const valueSM = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("searchTerm");
        value.current = searchBar.value;
        if(value.current) setAbility(false)
        else setAbility(true)
    }

    const handleChangeSM = () => {
        let searchBar = document.getElementById("searchTermSM");
        valueSM.current = searchBar.value;
        if(valueSM.current) setAbilitySM(false)
        else setAbilitySM(true)
    }

    const handleClose = () => setShow(false);
    const handleCloseSM = () => setShowSM(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    }
    const handleShowSM = (event) => {
        event.preventDefault();
        setShowSM(true);
    }

    return(
        <Navbar variant="light" bg={"light"} expand="md" className="py-3 mb-3">
            <Container className="d-none d-md-flex">
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src={iconImage} alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Nav className="me-auto text-center">
                        <Nav.Link href="/topics">Topics</Nav.Link>
                        <Nav.Link href="/collections">Collections</Nav.Link>
                        <Nav.Link href="/some-people">People</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="row text-center mx-auto mt-2 max-width-100" onSubmit={handleShow}>
                            <Col xs={8} className="align-items-center d-flex px-1">
                                <input type="text" id="searchTerm" placeholder="Search..." className="rounded width100 text-center" onChange={handleChange}></input>
                            </Col>
                            <Col xs={4} className="px-1">
                            <Button variant={"theme"} className="btn-block" disabled={buttonDisabled} type="submit" readOnly>Search</Button>
                            </Col>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="d-flex d-md-none">
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src={iconImage} alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Card className="border-none mt-2">
                        <Card.Body className="px-5">
                            <Form className="row" onSubmit={handleShowSM}>
                                <Col xs={7} className="align-items-center d-flex px-1">
                                    <input type="text" placeholder="Search..." id="searchTermSM" className="formInput rounded text-center" onChange={handleChangeSM}></input>
                                </Col>
                                <Col xs={5} className="px-1">
                                    <Button variant={"theme"} className="btn-block" disabled={buttonDisabledSM} type="submit" readOnly>Search</Button>
                                </Col>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="px-5">
                            <Button variant={"theme"} href={`/topics`} className="btn-block my-3">Topics</Button>
                            <Button variant={"theme"} href={`/collections`} className="btn-block my-3">Collections</Button>
                            <Button variant={"theme"} href={`/some-people`} className="btn-block my-3">People</Button>
                        </Card.Footer>
                    </Card>
                </Navbar.Collapse>
            </Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="width80">
                <Modal.Header className="rounded">
                    <p onClick={handleClose} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body bg={"transparent"}>
                    <Results input={value.current}/>
                </Modal.Body>
            </Modal>
            <Modal show={showSM} onHide={handleCloseSM} backdrop="static" keyboard={false} className="width80">
                <Modal.Header className="rounded">
                    <p onClick={handleCloseSM} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body bg={"transparent"}>
                    <Results input={valueSM.current}/>
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

function Results({input}) {
    let quoteList, listOrder=[];

    let {loading, data} = useQuery(QUERY_QUOTE_RESULT, {
        variables: {input: input},
    })

    if(loading) return <p>Loading...</p>

    quoteList = data.quoteResult;

    for(let n = 0; n < quoteList.length; ++n) {
        listOrder.push(n);
    }

    return (quoteList[0] ?
        <Container className="mb-2">
            <div>
                <Row className="text-center">
                    {quoteList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={quoteList} quoteIndex={quoteList.indexOf(index)} indexOrder={listOrder}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
        :
        <Container>
            <h5>No results under quotes...</h5>
        </Container>    
    )
}

export default NavBar;