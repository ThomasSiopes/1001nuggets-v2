import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_COLLECTION_ALL } from "../utils/queries";

function Collections () {
    let { loading, data } = useQuery(QUERY_COLLECTION_ALL);

    if(loading) return <span>Loading...</span>

    const collectionList = data.collections;
    console.log(collectionList);

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - Collections</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Collections</Card.Header>
                <Card.Header className="text-center py-3">
                    <Card.Title>Collections</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                    {collectionList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="my-2" key={index.name}>
                            <Card bg="white">
                                <Card.Header className="text-center">
                                    <Card.Text>{index.name}</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    {index.quotes.map((index2) => (
                                        <Card className="my-2" key={index + index2.quoteText}>
                                            <Link to={`/quote/${index2.realID}`} className="text-black">
                                            <Card.Body>
                                                <Card.Text>"{index2.quoteText}"</Card.Text>
                                            </Card.Body>
                                            </Link>
                                        </Card>
                                    ))
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    }
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Collections;