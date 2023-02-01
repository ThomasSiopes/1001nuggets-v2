import React from "react";
import { useQuery } from "@apollo/client";

import {Row, Col} from "react-bootstrap";

import TopicButton from "../TopicButton";

import { QUERY_TOPIC_NAME } from "../../utils/queries";

const SimilarTopics = ({thisTopic}) => {
    const { loading, data } = useQuery(QUERY_TOPIC_NAME, {
        variables: {
            name: thisTopic
        }});

    if(loading) return <p>Loading...</p>

    const topic = data.topicName;
    console.log(topic)

    return (
        <Row>
            {topic.similarTopics.map((index) => (
                <Col xs={12} md={6}  className="mb-2">
                    <strong><TopicButton type={"link"} name={index}/></strong>
                </Col>
            ))}
        </Row>
    )
}

export default SimilarTopics;