import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

function NavBar() {
    const [value, setValue] = useState('');

    const handleChange = () => {
        let searchBar = document.getElementById("searchTerm")
        setValue(searchBar.value)
        console.log(searchBar.value);
        console.log(value);
    }

    const handleSearch =() => {
        redirect(`/search/${value}`)
    }

    return(
        <Navbar variant="dark" expand="md" className="py-3 mb-3">
            <Container>
                <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src="/icon100opTrans.png" alt="Logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                    <Nav className="me-auto text-center">
                        <Nav.Link href="/topics">Topics</Nav.Link>
                        <Nav.Link href="/collections">Collections</Nav.Link>
                        <Nav.Link href="/somePeople">People</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="text-center mt-2" onSubmit={handleSearch}>
                            <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={handleChange}></input>
                            <input type="submit" className="btn btn-theme" value="Submit"/>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;