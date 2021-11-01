import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import TopicButton from "../components/TopicButton";
import AuthorPortraitButton from "../components/AuthorPortraitButton";
import MoreQuotesBy from "../components/MoreQuotesBy";

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
        <Container className="text-white text-center">
            <MetaTags>
                <title>Undoctrination - {quote.author} - {quote.quoteText}</title>
            </MetaTags>
            <Card className="bg-theme mb-3">
                <Card.Body>
                    <Card.Text className="display-6 container"><span className="quote-body"><i>"{quote.quoteText}"</i></span> - {quote.author}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col/>
                        {quote.topics.length !== 0 && 
                        <Col xs={12} md={4} lg={3}>
                            <p>Topics:
                                {quote.topics.map((index) => (
                                    <span key={index} className="ms-1"><TopicButton name={index}/></span>
                                ))}
                            </p>
                        </Col>
                        }
                        <Col xs={12} md={4} lg={3}>
                            <p>Share: 
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}><Button className="ms-1" variant={"theme"}><FaFacebookF/></Button></a>
                                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`}><Button className="ms-1" variant={"theme"}><FaTwitter/></Button></a>
                            </p>
                        </Col>
                        <Col/>
                    </Row>
                </Card.Footer>
            </Card>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <AuthorPortraitButton name={quote.author}/>
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <MoreQuotesBy quote={quote}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Quote;