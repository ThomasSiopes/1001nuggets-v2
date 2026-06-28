import React from "react";

import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return(
        <div className="footer bg-light mt-3">
            <Container>
                <Row className="py-3">
                    <Col xs={2}>
                        <img id="footer-icon" src={require("../../assets/images/N_IconGold.png")} alt="Logo"/>
                    </Col>
                    <Col>
                        <p>1001 Nuggets provides tens of thousands quotes of wisdom, categorized by hundreds of curated topics.</p>
                    </Col>
                    <Col>
                        <p>© 2024 1001 Nuggets. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;