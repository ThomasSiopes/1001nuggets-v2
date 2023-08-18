import React from "react";
import { Helmet } from "react-helmet";
import { redirect, useParams } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";

import ResultsQuote from "../components/ResultsQuote";

function SearchResults() {
    const { query } = useParams();

    if(!query || query === null || query === "undefined") return redirect(`/`);
    
    return (
        <Container className="auttopBody">
            <div className="wrapper">
                {/* <MetaTags>
                    <title>1001 Nuggets - {query}</title>
                </MetaTags> */}
                <Helmet>
                    <title>1001 Nuggets - {query}</title>
                </Helmet>
            </div>
            <Card>
                {/* <Card.Header><Link to={`/`} className="link-theme">Home</Link> {`>`} Search Results for "{query}"</Card.Header> */}
                <Card.Body>
                    {/* <Results type="author" input={query}></Results>
                    <Results type="topic" input={query}></Results> */}
                    <ResultsQuote input={query}></ResultsQuote>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResults;