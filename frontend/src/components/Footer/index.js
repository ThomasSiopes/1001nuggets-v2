import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

import { Card, Container, Col, Row } from "react-bootstrap";

function Footer() {
    return(
        <footer id="footer"className="bg-light">
            <Container>
                <Row className="pb-3">
                    <Col xs={12} sm={5} md={2}>
                        <Row className="pt-4 text-center align-items-center justify-content-center">
                            <Col xs={3} sm={12}>
                                <Container>
                                    <a href="/"><Card.Img id="footer-icon" src={require("../../assets/images/N_IconGold.png")} alt="Logo"/></a>
                                </Container>
                            </Col>
                            <Col xs={5} sm={12}>
                                <a className="share-button mx-1 share-facebook" href="https://www.facebook.com/profile.php?id=61573520023726" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                                <a className="share-button mx-1 share-X" href="https://x.com/1001_Nuggets" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
                                <a className="share-button mx-1 share-instagram" href="https://www.instagram.com/1001_nuggets/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className="d-none d-md-block">
                        <Container className="pt-4 mb-1">1001 Nuggets provides tens of thousands of wise quotes from authors, philosophers, and leaders, categorized by thousands of curated topics.</Container>
                    </Col>
                    <Col sm={4} className="d-none d-sm-block text-center">
                        <p className="pt-4 mb-1">Site</p>
                        <Row>
                            <Col sm={12} md={6}>
                                <p className="mb-0"><Link to="/">Home</Link></p>
                                <p className="mb-0"><Link to="/authors">Authors</Link></p>
                                <p className="mb-0"><Link to="/topics">Topics</Link></p>
                                <p className="mb-0"><Link to="/collections">Collections</Link></p>
                            </Col>
                            <Col sm={12} md={6}>
                                <p className="mb-0"><Link to="/author-catalogue">Author Catalogue</Link></p>
                                <p className="mb-0"><Link to="/quote-catalogue">Quote Catalogue</Link></p>
                                <p className="mb-0"><Link to="/glossary">Glossary</Link></p>
                                <p className="mb-0"><Link to="/publications">Publications</Link></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3} className="d-none d-sm-block text-center">
                        <p className="pt-4 mb-1">About Us</p>
                        <p><Link to={"https://www.graffitian.com"}>Graffitian Publishing</Link></p>
                    </Col>
                </Row>
            </Container>
            <p className="py-3 mb-0 text-center bg-footermost">©2024-2026 1001 Nuggets</p>
        </footer>
    )
}

export default Footer;