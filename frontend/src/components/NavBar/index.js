import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

function NavBar() {
    const value = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("searchTerm");
        value.current = searchBar.value;
    }

    const navigate = useNavigate();

    return(
        <Navbar variant="light" bg={"light"} expand="md" className="py-3 mb-3">
            <Container>
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src="/image5trans.png" alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Nav className="me-auto text-center">
                        <Nav.Link href="/topics">Topics</Nav.Link>
                        <Nav.Link href="/collections">Collections</Nav.Link>
                        <Nav.Link href="/some-people">People</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="text-center mt-2" onSubmit={() => navigate('search/' + value.current)}>
                            <input type="text" id="searchTerm" placeholder="Search..." className="me-2 rounded" onChange={handleChange}></input>
                            <input type="submit" className="btn btn-theme" value="Submit"/>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;