import React from "react";
// import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import AuthorButton from "../components/AuthorButton";

import { QUERY_AUTHORCAT_REALID } from "../utils/queries";

function AuthorCatPage () {
    const { authorCatRealId } = useParams();
    let {loading, data} = useQuery(QUERY_AUTHORCAT_REALID, {
        variables: {authorCatRealId: authorCatRealId},
        fetchPolicy: "cache-and-network"
    });

    if(!authorCatRealId || authorCatRealId === null || authorCatRealId === "undefined") return <Navigate to={`/author-catalogue`} replace/>;

    if(!loading && !data) return <Navigate to={`/404error`} replace/>;

    const authorCat = data?.authorCatR;

    return (
        <>
        {/* <LoadingOverlay show={loading && !data} /> */}
        {authorCat && <HelmetProvider>
        <Container className="pt-3 mainBody">
            <Helmet>
                <title>1001 Nuggets - {authorCat.name}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded"> <Link className="link-theme" to="/">Home</Link> {`>`} <Link className="link-theme" to={`/author-catalogue`}>Author Catalogue</Link> {`>`} {authorCat.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {authorCat.authorDetails.map((index) => (
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