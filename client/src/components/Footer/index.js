import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const FooterPage = () => {
    return (
        <div id="footer-supreme" className="bg-theme text-center text-white mt-4 py-4">
            <Container>
                <Row>
                    <Col xs={4}><Link to={`/authors`}>Authors</Link></Col>
                    <Col xs={4}><Link to={`/topics`}>Topics</Link></Col>
                    <Col xs={4}><Link to={`/collections`}>Collections</Link></Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterPage;
