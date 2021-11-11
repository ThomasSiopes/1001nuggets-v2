import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import QOTD from "../components/QOTD";
import RandomAuthors from "../components/RandomAuthors";
import RandomTopics from "../components/RandomTopics";
import RandomQuotes from "../components/RandomQuotes";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Row>
                <Col xs={12}>
                    <QOTD input={"61843282cb06fa1d8462708e"}/>
                </Col>
                <Col xs={12} lg={5} className="mb-3">
                    <RandomQuotes/>
                </Col>
                <Col xs={12} lg={7}>
                    <Row className="text-center">
                        <Col xs={6}>
                            <RandomAuthors/>
                        </Col>
                        <Col xs={6}>
                            <RandomTopics/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
