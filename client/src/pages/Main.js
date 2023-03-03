import React from "react";
import { Container } from "react-bootstrap";
import MetaTags from "react-meta-tags";

// import RandomAuthors from "../components/RandomAuthors";
// import RandomTopics from "../components/RandomTopics";
// import RandomQuotes from "../components/RandomQuotes";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <img src="assets/images/thumbnails/background-copy.png" alt="homepage"/>
        </Container>
    )
}

export default Main;
