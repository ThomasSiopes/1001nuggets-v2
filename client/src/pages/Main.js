import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
                <Col xs={12} md={4} className="mb-3">
                    <Link to={`/authors`} className="btn btn-theme btn-block">Authors</Link>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Link to={`/topics`} className="btn btn-theme btn-block">Topics</Link>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <Link to={`/collections`} className="btn btn-theme btn-block">Collections</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
