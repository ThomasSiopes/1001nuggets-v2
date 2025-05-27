import React from "react";
import { Helmet } from "react-helmet";
import { Link, redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import AuthorButton from "../components/AuthorButton";

import { QUERY_TAG_ID } from "../utils/queries";

function TagPage () {
    const { tagId } = useParams();
    let {loading, data} = useQuery(QUERY_TAG_ID, {
        variables: {tagId: tagId},
    });

    if(!tagId || tagId === null || tagId === "undefined") return redirect(`/authors`);

    if(loading) return <p>Loading...</p>

    if(!data) return redirect(`/404error`);

    const tag = data.tagID;

    return (
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {tag.tag}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} <Link className="link-theme" to={`/authors`}>Author Tags</Link> {`>`} {tag.tag}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {tag.authors.map((index) => (
                            <Col key={index} className="mb-3" xs={12} sm={6} md={4}>
                                <AuthorButton type={"button-block"} name={index} theme={"weak"}/>
                            </Col>
                         ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default TagPage;