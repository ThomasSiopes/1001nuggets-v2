import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import QOTD from "../components/QOTD";
// import RandomAuthors from "../components/RandomAuthors";
// import RandomTopics from "../components/RandomTopics";
// import RandomQuotes from "../components/RandomQuotes";

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
            <div>
                <QOTD input={dailyQuote[0].storedID}/>
            </div>
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
