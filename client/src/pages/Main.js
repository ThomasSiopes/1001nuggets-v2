import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import QOTD from "../components/QOTD";
import RandomAuthors from "../components/RandomAuthors";
import RandomTopics from "../components/RandomTopics";
import RandomQuotes from "../components/RandomQuotes";

import { QUERY_QUOTE_ALL } from "../utils/queries"

function Main() {
    let {loading, data} = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <p>Loading...</p>

    const quotes = data.quotes;

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Row>
                <Col xs={12}>
                    <QOTD input={randomQuote._id}/>
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
