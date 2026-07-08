import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Container, Card } from "react-bootstrap";

function ErrorPage () {
    return(
        <HelmetProvider>
            <Container className="pt-3 mainBody">
                <Helmet>
                    <title>1001 Nuggets - Does Not Exist</title>
                </Helmet>
                <Card bg={"light"} border={"none"}>
                    <Card.Header className="bg-light rounded-top">
                        <Link className="link-theme" to={"/"}>Return Home</Link>
                    </Card.Header>
                    <Card.Body>The page you're looking for does not exist...</Card.Body>
                </Card>
            </Container>
        </HelmetProvider>
    )
}

export default ErrorPage;