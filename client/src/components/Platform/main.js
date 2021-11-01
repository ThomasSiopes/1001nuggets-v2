import React from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const PlatformMain = () => {
    return (
        <Container className="text-center text-white">
            <MetaTags>
                <title>Undoctrination - Platforms</title>
            </MetaTags>
            <h3 className="bg-theme rounded py-3 mb-3">Other Platforms</h3>
            <Row>
                <Col xs={12} className="mb-3">
                    <hr className="text-black"></hr>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4} md={3} className="text-center mb-3">
                    <Link to={`/platforms/facebook`}>
                        <Card bg={"theme"}>
                            <Button variant={"theme"} className="block">
                                <Card.Body>
                                    <FaFacebookF/>
                                </Card.Body>
                            </Button>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={4} md={3} className="text-center mb-3">
                    <Link to={`/platforms/twitter`}>
                        <Card bg={"theme"}>
                            <Button variant={"theme"} className="block">
                                <Card.Body>
                                    <FaTwitter/>
                                </Card.Body>
                            </Button>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={4} md={3} className="text-center mb-3">
                    <Link to={`/platforms/instagram`}>
                        <Card bg={"theme"}>
                            <Button variant={"theme"} className="block">
                                <Card.Body>
                                    <FaInstagram/>
                                </Card.Body>
                            </Button>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={4} md={3} className="text-center mb-3">
                    <Link to={`/platforms/youtube`}>
                        <Card bg={"theme"}>
                            <Button variant={"theme"} className="block">
                                <Card.Body>
                                    <FaYoutube/>
                                </Card.Body>
                            </Button>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PlatformMain;