import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const FooterPage = () => {
    return (
        <div id="footer-supreme" className="bg-theme text-center text-white mt-4 py-2">
            <Container className="d-none d-md-block">
                <Row>
                    <Col xs={5} md={4} className="d-flex font-Lato">
                        <Container className="align-self-center py-2">
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
                            <p><Link className="text-white" to={`/topics`}>Topics</Link></p>
                            <p><Link className="text-white" to={`/collections`}>Collections</Link></p>
                        </i>
                    </Col>
                </Row>
            </Container>
            <Container className="d-block d-md-none my-">
                {/* <strong><Link className="text-white mx-3" to={`/authors`}>Authors</Link></strong> */}
                <strong><Link className="text-white mx-3" to={`/topics`}>Topics</Link></strong>
                <strong><Link className="text-white mx-3" to={`/collections`}>Collections</Link></strong>
            </Container>
        </div>
    )
}

export default FooterPage;
