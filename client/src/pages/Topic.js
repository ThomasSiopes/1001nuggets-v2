import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import AuthorButton from "../components/AuthorButton";

import { QUERY_TOPIC_ID } from "../utils/queries";

function Topic () {
    const { topicId } = useParams();
    let {loading, data} = useQuery(QUERY_TOPIC_ID, {
        variables: {topicId: topicId},
    });

    if(!topicId || topicId === null || topicId === "undefined") return (<Redirect to={`/topics`}/>);

    if(loading) return <p>Loading...</p>

    const topic = data.topicID;

    console.log(topic);

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - {topic.name}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/topics`}>Topics</Link> {`>`} {topic.name}</Card.Header>
                <Card.Body>
                    <p>Quotes about {topic.name}</p>
                    <Row>
                        {topic.quotes.map((index) => (
                            <Col xs={12} md={6} lg={4} key={index.quoteText} className="mb-3">
                                <Card className="card-height">
                                    <Link to={`/quote/${index._id}`} className="text-black">
                                        <Card.Body className="pb-0">
                                            <Card.Text>"{index.quoteText}"</Card.Text>
                                        </Card.Body>
                                    </Link>
                                    <Card.Body>
                                        <Card.Text><AuthorButton type={"link"} name={index.author}/></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Topic;