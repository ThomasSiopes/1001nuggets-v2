import React, { useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

function SmallHome() {
    const [buttonDisabled, setAbility] = useState(true)
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);

    const handleChange = (e) => {
        setAbility(e.target.value.length <= 3);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const term = inputRef.current?.value?.trim();
        if(term && !buttonDisabled) navigate(`/search/${term}`);
    }
    
    return(
        <div className="text-white d-xs-block d-sm-none">
            <div id="homeBody">
                <h1 className="mb-1">1001 NUGGETS</h1>
                <span id="homeSubtext">EVERYTHING • EVERYONE • EVERYWHERE</span>
                <Form className="row mx-3 mt-5 align-items-center" onSubmit={handleSubmit}>
                    <Col className="p-0" xs={10}>
                        <input ref={inputRef} type="text" id="homeSearch" placeholder="Search Nuggets..." className="rounded width100 text-center py-2" onChange={handleChange}/>
                    </Col>
                    <Col className="p-0" xs={2}>
                        <Button variant={"theme"} type="submit" disabled={buttonDisabled} aria-label="search" readOnly>
                            <FaSearch/>
                        </Button>
                    </Col>
                </Form>
                <Row className="align-items-center text-center my-4 mx-1">
                    <Col className="break-line"/>
                    <Col className="p-0" xs={1}>OR</Col>
                    <Col className="break-line"/>
                </Row>
                <Button variant={"theme"} className="py-3 px-5" onClick={handleModalShow}>Find Nuggets</Button>
                <Modal show={show} onHide={handleModalClose} centered className="px-2">
                    <Modal.Body>
                        {/* <Button variant={"theme"} as={NavLink} to={`/everything`} className="btn-block my-3">Everything</Button> */}
                        {/* <Button variant={"theme"} as={NavLink} to={`/everyone`} className="btn-block my-3">Everyone</Button> */}
                        {/* <Button variant={"theme"} as={NavLink} to={`/everywhere`} className="btn-block my-3">Everywhere</Button> */}
                        <Button variant={"theme"} as={NavLink} to={`/authors`} className="btn-block my-3">Authors</Button>
                        <Button variant={"theme"} as={NavLink} to={`/topics`} className="btn-block my-3">Topics</Button>
                        <Button variant={"theme"} as={NavLink} to={`/collections`} className="btn-block my-3">Collections</Button>
                        <Button variant={"theme"} as={NavLink} to={`/author-catalogue`} className="btn-block my-3">Author Catalogue</Button>
                        <Button variant={"theme"} as={NavLink} to={`/quote-catalogue`} className="btn-block my-3">Quote Catalogue</Button>
                        <Button variant={"theme"} as={NavLink} to={`/glossary`} className="btn-block my-3">Glossary</Button>
                        <Button variant={"theme"} as={NavLink} to={`/publications`} className="btn-block my-3">Publications</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default SmallHome;