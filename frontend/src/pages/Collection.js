import React from "react";
import { Helmet } from "react-helmet";
import { Link, redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import TopicButton from "../components/TopicButton";

import { QUERY_COLLECTION_REALID } from "../utils/queries";

function Collection () {
    const { collectionRealId } = useParams();
    let {loading, data} = useQuery(QUERY_COLLECTION_REALID, {
        variables: {collectionRealId: collectionRealId},
    });

    if(!collectionRealId || collectionRealId === null || collectionRealId === "undefined") return redirect(`/collections`);

    if(loading) return <p>Loading...</p>

    if(!data) return redirect(`/404error`);

    const collection = data.collectionR

    return (
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {collection.name}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} <Link className="link-theme" to={`/collections`}>Collections</Link> {`>`} {collection.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {collection.topics.map((index) => (
                            <Col key={index} className="mb-3" xs={12} sm={6} md={4}>
                                <TopicButton type={"button-block"} name={index} theme={"weak"}/>
                            </Col>
                         ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Collection;