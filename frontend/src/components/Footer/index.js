import React from "react";

import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return(
        <Container className="footer bg-light mt-4">
            <Row className="py-3">
                <Col xs={2}>
                    <img id="footer-icon" src={require("../../assets/images/N_IconGoldTransparentTiny.png")} alt="Logo"/>
                </Col>
                <Col>
                    <p>Information about this application.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;