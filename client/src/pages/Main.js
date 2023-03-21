import React from "react";
import { Container } from "react-bootstrap";
import MetaTags from "react-meta-tags";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <img className="my-5" src="assets/images/thumbnails/background-copy.png" alt="homepage"/>
        </Container>
    )
}

export default Main;
