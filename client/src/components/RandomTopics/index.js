import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Row, Col, Button } from "react-bootstrap";

import TopicButton from "../TopicButton";

import { QUERY_TOPIC_ALL } from "../../utils/queries";

const RandomTopics = () => {
    const { loading, data } = useQuery(QUERY_TOPIC_ALL);

    if(loading) return <p>Loading...</p>

    const topics = data.topics;

    let newList = [];

    while (newList.length < 10) {
        let newElement = topics[Math.floor(Math.random() * topics.length)];
        if(!(newList.includes(newElement))) newList.push(newElement);
    }
    
    return(
        <Card className="text-center">
            <Card.Header>Random Topics</Card.Header>
            <Card.Body>
                <Row>
                    {newList.map((index) => (
                        <Col xs={12} xl={6} className="mb-3" key={index.name}>
                            <TopicButton type={"link"} name={index.name}/>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer>
                <Link to={`/topics`}>
                    <Button variant={"theme"}>See All Topics</Button>
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default RandomTopics;