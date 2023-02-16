import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MetaTags from "react-meta-tags";

// import RandomAuthors from "../components/RandomAuthors";
// import RandomTopics from "../components/RandomTopics";
// import RandomQuotes from "../components/RandomQuotes";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Row>
                <Col>
                    <Button variant={"theme"} className="btn-block">Authors</Button>
                </Col>
                <Col>
                    <Button variant={"theme"} className="btn-block">Topics</Button>
                </Col>
                <Col>
                    <Button variant={"theme"} className="btn-block">Collections</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
