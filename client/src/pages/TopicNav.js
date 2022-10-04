import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_TOPIC_ALL } from "../utils/queries";

function TopicNavigation () {
    let { loading, data } = useQuery(QUERY_TOPIC_ALL);

    if(loading) return <span>Loading...</span>

    const topicList = data.topics;

    let sortedList = []

    for(let index of topicList) {
        sortedList.push(index)
    }

    sortedList = sortedList.sort((a,b) => a.sortedName.localeCompare(b.sortedName));

    const searchFunction = () => {
        let input, filter, group, elements, body, textValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByClassName("col-12")

        for(let i = 0; i < elements.length; ++i) {
            body = elements[i].getElementsByTagName("a")[0];
            textValue = body.textContent || body.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display="";
            else elements[i].style.display="none";
        }
    }

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - Topics</title>
            </MetaTags>
            <Card>
            <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Topics</Card.Header>
                <Card.Header className="text-center py-3">
                    <Card.Title>Topics</Card.Title>
                </Card.Header>
                <Card.Body>
                    <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for topic names..." className="mb-3"/>
                    <Row id="myGroup">
                        {sortedList.map((index) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={index.name} className="text-center mb-3">
                                <span><Link to={`/topic/${index.realID}`} className="link-theme">{index.name}</Link></span>
                                <span className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</span>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default TopicNavigation;