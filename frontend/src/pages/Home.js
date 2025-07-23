import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap"

import { FaSearch } from "react-icons/fa";

const QuoteOfTheDay = React.lazy(() => import("../components/QuoteOfTheDay"))

function Home () {  
    const [buttonDisabled, setAbility] = useState(true)
    const value = useRef('');

    const [show, setShow] = useState(false);

    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);

    const handleChange = () => {
        let searchBar = document.getElementById("homeSearch");
        value.current = searchBar.value;
        if(value.current) setAbility(false);
        else setAbility(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/search/" + value.current;
    }
    
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <div className="text-center bg-main">
                <Container className="d-none d-sm-block">
                    <QuoteOfTheDay/>
                </Container>
                <div className="text-white d-xs-block d-sm-none">
                    <div id="homeBody">
                        <h1 className="mb-1">1001 NUGGETS</h1>
                        <span id="homeSubtext">EVERYTHING • EVERYONE • EVERYWHERE</span>
                        <Form className="row mx-3 mt-5 align-items-center" onSubmit={handleSubmit}>
                            <Col className="p-0" xs={10}><input type="text" id="homeSearch" placeholder="Search Nuggets..." className="rounded width100 text-center py-2" onChange={handleChange}/></Col>
                            <Col className="p-0" xs={2}><Button variant={"theme"} type="submit" disabled={buttonDisabled} aria-label="search" readOnly><FaSearch/></Button></Col>
                        </Form>
                        <Row className="align-items-center text-center my-4 mx-1">
                            <Col className="break-line"/>
                            <Col className="p-0" xs={1}>OR</Col>
                            <Col className="break-line"/>
                        </Row>
                        <Button variant={"theme"} className="py-3 px-5" onClick={handleModalShow}>Find Nuggets</Button>
                        <Modal show={show} onHide={handleModalClose} centered className="px-2">
                            <Modal.Body>
                                <Button variant={"theme"} href={`/topics`} className="btn-block my-3">Topics</Button>
                                <Button variant={"theme"} href={`/collections`} className="btn-block my-3">Collections</Button>
                                {/* <Button variant={"theme"} href={`/authors`} className="btn-block my-3">Authors</Button> */}
                                <Button variant={"theme"} href={`/publications`} className="btn-block my-3">Publications</Button>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home