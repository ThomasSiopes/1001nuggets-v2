import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Modal, Col, Button, Row, Form, Card } from "react-bootstrap";

import iconImage from "../../assets/images/N_IconGoldTransparentTiny.png"
import { QUERY_QUOTE_RESULT_PREVIEW } from '../../utils/queries';

const QuoteCard = React.lazy(() => import("../QuoteCard"));

function NavBar() {
    const [show, setShow] = useState(false);
    const [buttonDisabled, setAbility] = useState(true)
    const value = useRef('');

    const handleChange = (e) => {
        value.current = e.target.value;
        setAbility(value.current.length <= 3)
    }

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    }

    return(
        <Navbar variant="light" bg={"light"} expand="lg" className="py-3">
            <Container className="d-none d-md-flex">
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src={iconImage} alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Nav className="me-auto justify-content-center text-center">
                        <Nav.Link as={NavLink} to="/authors">Authors</Nav.Link>
                        <Nav.Link as={NavLink} to="/topics">Topics</Nav.Link>
                        <Nav.Link as={NavLink} to="/collections">Collections</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/everything">Everything</Nav.Link> */}
                        {/* <Nav.Link as={NavLink} to="/everyone">Everyone</Nav.Link> */}
                        {/* <Nav.Link as={NavLink} to="/everywhere">Everywhere</Nav.Link> */}
                        <Nav.Link as={NavLink} to="/glossary">Glossary</Nav.Link>
                        <Nav.Link as={NavLink} to="/publications">Publications</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="row text-center mx-auto mt-2 max-width-100" onSubmit={handleShow}>
                            <Col xs={8} className="align-items-center d-flex px-1">
                                <input type="text" id="searchTerm" placeholder="Search..." className="rounded width100 text-start" onChange={handleChange}/>
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
                            <Form className="row" onSubmit={handleShow}>
                                <Col xs={7} className="align-items-center d-flex px-1">
                                    <input type="text" placeholder="Search..." id="searchTerm" className="formInput rounded text-start" onChange={handleChange}/>
                                </Col>
                                <Col xs={5} className="px-1">
                                    <Button variant={"theme"} className="btn-block" disabled={buttonDisabled} type="submit" readOnly>Search</Button>
                                </Col>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="px-5">
                            <Button variant={"theme"} as={NavLink} to={`/authors`} className="btn-block my-3">Authors</Button>
                            <Button variant={"theme"} as={NavLink} to={`/topics`} className="btn-block my-3">Topics</Button>
                            <Button variant={"theme"} as={NavLink} to={`/collections`} className="btn-block my-3">Collections</Button>
                            {/* <Button variant={"theme"} as={NavLink} to={`/everything`} className="btn-block my-3">Everything</Button> */}
                            {/* <Button variant={"theme"} as={NavLink} to={`/everyone`} className="btn-block my-3">Everyone</Button> */}
                            {/* <Button variant={"theme"} as={NavLink} to={`/everywhere`} className="btn-block my-3">Everywhere</Button> */}
                            <Button variant={"theme"} as={NavLink} to={`/glossary`} className="btn-block my-3">Glossary</Button>
                            <Button variant={"theme"} as={NavLink} to={`/publications`} className="btn-block my-3">Publications</Button>
                        </Card.Footer>
                    </Card>
                </Navbar.Collapse>
            </Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="width80">
                <Modal.Header className="rounded">
                    <p onClick={handleClose} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body bg={"transparent"}>
                    {show && <Results input={value.current}/>}
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

function Results({input}) {
    let listOrder=[];

    let {loading, error, data} = useQuery(QUERY_QUOTE_RESULT_PREVIEW, {
        variables: {input: input, limit: 100},
    })

    if(loading) return <p>Loading...</p>
    if(error || !data) return <p>Something went wrong.</p>

    const MAX_PREVIEW = 20;
    const quoteList = data.quoteResultP.slice(0, MAX_PREVIEW);
    const hasMore = data.quoteResultP.length > MAX_PREVIEW;

    for(let n = 0; n < quoteList.length; ++n) {
        listOrder.push(n);
    }

    return (quoteList[0] ?
        <Container className="mb-2">
            <div>
                <Row className="text-center">
                    {quoteList.map((index, i) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={quoteList} quoteIndex={i} indexOrder={listOrder}/>
                        </Col>
                    ))}
                </Row>
            </div>
            {hasMore && <p className="text-center">Showing 20 results — <Button variant={"theme"} href={`/search/${input}`}>View all results</Button></p>}
        </Container>
        :
        <Container>
            <h5>No results under quotes...</h5>
        </Container>    
    )
}

export default NavBar;