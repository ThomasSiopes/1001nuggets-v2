import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="mb-3" expand="sm">
            <Row className="align-items-end">
                <Col xs={12} lg={5}>
                    <Link to={`/`} title="Home" className="navIcon"><img id="banner" src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link>
                </Col>
                <Col xs={12} lg={7} className="text-center">
                    <Nav>
                        <Row className="mx-auto container">
                            <Col xs={12} sm={4} className="nav-link"><Link to={`/freethinkers`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                            <Col xs={12} sm={4} className="nav-link"><Link to={`/thoughts`}><Button variant={"theme"} className="btn-block"><strong>Thoughts</strong></Button></Link></Col>
                            <Col xs={12} sm={4} className="nav-link"><Link to={`/platforms`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                        </Row>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavBar;