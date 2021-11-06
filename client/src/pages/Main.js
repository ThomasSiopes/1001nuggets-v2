import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import AuthorCards from "../components/AuthorCards";
import MainPageSearch from "../components/MainpageSearch";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={9}><AuthorCards/></Col>
                        <Col xs={12} md={3}><MainPageSearch/></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Main;
