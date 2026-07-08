import React from "react";
// import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import AuthorButton from "../components/AuthorButton";

import { QUERY_AUTHORCAT_REALID } from "../utils/queries";

function AuthorCatPage () {
    const { authorcatId } = useParams();
    let {loading, data} = useQuery(QUERY_AUTHORCAT_REALID, {
        variables: {authorcatRealId: authorcatId},
        fetchPolicy: "cache-and-network"
    });

    if(!authorcatId || authorcatId === null || authorcatId === "undefined") return <Navigate to={`/author-catalogue`} replace/>;

    if(!loading && !data) return <Navigate to={`/404error`} replace/>;

    const authorcat = data?.authorcatR;

    return (
        <>
        {/* <LoadingOverlay show={loading && !data} /> */}
        {authorcat && <HelmetProvider>
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {authorcat.authorcat}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} <Link className="link-theme" to={`/author-catalogue`}>Author Catalogue</Link> {`>`} {authorcat.authorcat}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {authorcat.authorDetails.map((index) => (
                            <Col key={index} className="mb-3" xs={12} sm={6} md={4}>
                                <AuthorButton type={"button-block"} name={index.name} realID={index.realID} theme={"weak"}/>
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

export default AuthorCatPage;