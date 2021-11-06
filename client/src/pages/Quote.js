import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaReddit } from "react-icons/fa";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";

import { QUERY_QUOTE_ID } from "../utils/queries";

function Quote () {
    const { quoteId } = useParams();
    let { loading, data } = useQuery(QUERY_QUOTE_ID, {
        variables: {quoteId: quoteId},
    })

    if(!quoteId || quoteId === null || quoteId === "undefined") return (<Redirect to={`/`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const quote = data.quote;

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - {quote.author} - {quote.quoteText}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link to={`/`} className="link-theme">Home</Link> {`>`} <Link to={`/authors`} className="link-theme">Authors</Link> {`>`} <AuthorButton type={"link"} name={quote.author}/> {`>`} Quotes</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={8}>
                            <Card className="mb-3">
                                <div id="quote-page">
                                    <Card.Body>
                                        <Card.Text className="display-6"><span className="quote-body" id="main-quote">"{quote.quoteText}"</span></Card.Text>
                                        <Card.Text><strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
                                    </Card.Body>
                                    <Card.Body className="text-center">
                                        <Link className="mx-2 share-button" to={`https://twitter.com/intent/tweet?url=${window.location.href}`} id="share-twitter"><FaTwitter/></Link>
                                        <Link className="mx-2 share-button" to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} id="share-facebook"><FaFacebookF/></Link>
                                        <Link className="mx-2 share-button" to={``} id="share-reddit"><FaReddit/></Link>
                                    </Card.Body>
                                </div>
                                {quote.topics.length !== 0 && 
                                    <Card.Footer className="text-center py-3">
                                            {quote.topics.map((index) => (
                                                <span key={index} className="mx-1"><TopicButton name={index}/></span>
                                            ))}
                                </Card.Footer>
                                }
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <p>More Quotes by Author and More Quotes by Topic</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Quote;