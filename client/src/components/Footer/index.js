import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const FooterPage = () => {
    return (
        <Card id="footer-supreme" className="bg-theme text-center text-white mt-4 py-4">
            <Container>
                <Row>
                    <Col xs={5} md={4} className="d-flex font-Lato">
                        <Container className="align-self-center">
                            <Link to={`/`} className="navbar-brand text-white"><img src="/assets/images/thumbnails/background-copy.png" id="footer-img" alt="Footer Icon"/></Link>
                        </Container>
                    </Col>
                    <Col xs={7} md={4} className="align-self-center mb-3">
                        <span>Website Description. Maybe about us section? Copyright info? Anything relevant in text form.</span>
                    </Col>
                    <Col xs={12} md={4}>
                        <p className="d-none d-md-block mx-auto text-center align-self-center">Site</p>
                        <hr></hr>
                        <i>
                            <p><Link className="text-white" to={`/`}>Home</Link></p>
                            <p><Link className="text-white" to={`/authors`}>Authors</Link></p>
                            <p><Link className="text-white" to={`/topics`}>Topics</Link></p>
                        </i>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default FooterPage;
