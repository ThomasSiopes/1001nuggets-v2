import React from "react";
// import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import TopicButton from "../components/TopicButton";

import { QUERY_COLLECTION_REALID } from "../utils/queries";

function Collection () {
    const { collectionRealId } = useParams();
    let {loading, data} = useQuery(QUERY_COLLECTION_REALID, {
        variables: {collectionRealId: collectionRealId},
        fetchPolicy: "cache-and-network"
    });

    if(!collectionRealId || collectionRealId === null || collectionRealId === "undefined") return <Navigate to={`/collections`} replace/>;

    if(!loading && !data) return <Navigate to={`/404error`} replace/>;

    const collection = data?.collectionR;

    return (
        <>
        {/* <LoadingOverlay show={loading && !data} /> */}
        {collection && <HelmetProvider>
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {collection.name}</title>
                <meta name="description" content={`Read quotes under ${collection.name} on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${collection.name}`} />
                <meta property="og:description" content={`Read quotes under ${collection.name} on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/collection/${collectionRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/collection/${collectionRealId}`} />
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} <Link className="link-theme" to={`/collections`}>Collections</Link> {`>`} {collection.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {collection.topicDetails.map((index) => (
                            <Col key={index} className="mb-3" xs={12} sm={6} md={4}>
                                <TopicButton type={"button-block"} name={index.name} realID={index.realID} theme={"weak"}/>
                            </Col>
                         ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        </HelmetProvider>}
        </>
    )
}

export default Collection;