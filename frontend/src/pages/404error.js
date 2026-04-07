import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Container, Card } from "react-bootstrap";

function ErrorPage () {
    return(
        <HelmetProvider>
            <Container className="pt-3">
                <Helmet>
                    <title>1001 Nuggets - Error</title>
                </Helmet>
                <Card bg={"light"} border={"none"}>
                    <Card.Header className="bg-light rounded-top">
                        <Link className="link-theme" to={"/"}>Return Home</Link>
                    </Card.Header>
                    <Card.Body>An unexpected error has occurred while loading the page!</Card.Body>
                </Card>
            </Container>
        </HelmetProvider>
    )
}

export default ErrorPage;