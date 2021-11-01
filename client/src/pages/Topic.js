import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AuthorButton from "../components/AuthorButton";

import { QUERY_TOPIC_ID } from "../utils/queries";

function Topic () {
    const { topicId } = useParams();
    let {loading, data} = useQuery(QUERY_TOPIC_ID, {
        variables: {topicId: topicId},
    });

    if(!topicId || topicId === null || topicId === "undefined") return (<Redirect to={`/topicNavigation`}/>);

    if(loading) return <p>Loading...</p>

    console.log(data)

    let quoteList = data.topicID.quotes

    return (
        <Container className="text-center text-white">
            <MetaTags>
                <title>Undoctrination - {data.topicID.name}</title>
            </MetaTags>
            <h3 className="bg-theme py-3 rounded mb-3">
                {data.topicID.name}
            </h3>
            <Row>
            {quoteList.map((index) => (
                <Col xs={12} md={6} className="mb-2" key={index.quoteText}>
                    <Card className="bg-theme">
                        <Link to={`/quote/${index._id}`}><Button variant={"theme"}>
                            <Card.Body>"{index.quoteText}"</Card.Body>
                        </Button></Link>
                        <Card.Footer>
                            <AuthorButton name={index.author}/>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Topic;