import React from "react";
import { useQuery } from "@apollo/client";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import { QUERY_SCOREBOARD } from "../utils/queries";

function scoreIncrease(event) {
    event.preventDefault();
    console.log(this.key);
}

function Scoreboard() {
    let { loading, data } = useQuery(QUERY_SCOREBOARD);

    if(loading) return <p>Loading...</p>

    let scoreboard = data.scoreboard[0]

    console.log(scoreboard);

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Card>
                <Card.Body>
                    <Row className="mb-3">
                        {scoreboard.scores.map((index) => (
                            <Col xs={3} key={index.name}>
                                <p>{index.name} : {index.score}</p>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col xs={6}>
                            {scoreboard.questions[0].text}
                        </Col>
                        <Col xs={6}>
                            {scoreboard.questions[0].choices.map((index) => (
                                <Button className="mx-1" key={index.name} onClick={scoreIncrease}>{index.name}</Button>
                            ))}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Scoreboard;
