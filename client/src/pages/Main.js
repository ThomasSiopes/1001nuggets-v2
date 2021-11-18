import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import QOTD from "../components/QOTD";
import RandomAuthors from "../components/RandomAuthors";
import RandomTopics from "../components/RandomTopics";
import RandomQuotes from "../components/RandomQuotes";

import { GET_QOTD } from "../utils/queries";

function Main() {
    let { loading, data } = useQuery(GET_QOTD);

    if(loading) return <p>Loading...</p>

    const dailyQuote = data.QOTD;

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Row>
                <Col xs={12}>
                    <QOTD input={dailyQuote[0].storedID}/>
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
