import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, Nav, Modal, Col, Row } from "react-bootstrap";

import iconImage from "../../assets/images/N_Icon2_Transparent.png"
import { QUERY_QUOTE_RESULT } from '../../utils/queries';

const QuoteCard = React.lazy(() => import("../QuoteCard"));

function NavBar() {
    const [show, setShow] = useState(false);
    const value = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("searchTerm");
        value.current = searchBar.value;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Navbar variant="light" bg={"light"} expand="md" className="py-3 mb-3">
            <Container>
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src={iconImage} alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Nav className="me-auto text-center">
                        <Nav.Link href="/topics">Topics</Nav.Link>
                        <Nav.Link href="/collections">Collections</Nav.Link>
                        <Nav.Link href="/some-people">People</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="text-center mt-2">
                            <input type="text" id="searchTerm" placeholder="Search..." className="me-2 rounded" onChange={handleChange}></input>
                            <input className="btn btn-theme" onClick={handleShow} value="Search"/>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="width80">
                <Modal.Header>
                    <p onClick={handleClose} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body>
                    <Results input={value.current}/>
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
                <h5>Results under quotes . . .</h5>
                <hr></hr>
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