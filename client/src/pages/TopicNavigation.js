import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import { QUERY_TOPIC_ALL } from "../utils/queries";

function TopicNavigation () {
    let { loading, data } = useQuery(QUERY_TOPIC_ALL);

    if(loading) return <span>Loading...</span>

    const topicList = data.topics;

    console.log(topicList);

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
        <Container className="text-center text-white">
            <MetaTags>
                <title>Undoctrination - Thoughts</title>
            </MetaTags>
            <h3 className="bg-theme py-3 rounded mb-3">Thoughts</h3>
            <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for thought names..." className="mb-3"/>
            <Row id="myGroup">
                {topicList.map((index) => (
                    <Col xs={12} sm={6} md={4} key={index.name} className="text-center mb-3">
                        <Link to={`/topic/${index._id}`}>
                            <Card bg={"theme"}>
                                <Button variant={"theme"} className="block">
                                    <Card.Body>
                                        {index.name}
                                    </Card.Body>
                                </Button>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TopicNavigation;