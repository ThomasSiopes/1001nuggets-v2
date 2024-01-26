import React from "react";
import { Helmet } from "react-helmet";
import { redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";

import { QUERY_QUOTE_REALID } from "../utils/queries";

function Quote () {
    const { quoteRealId } = useParams();
    let { loading, data } = useQuery(QUERY_QUOTE_REALID, {
        variables: {quoteRealId: quoteRealId},
    })

    if(!quoteRealId || quoteRealId === null || quoteRealId === "undefined") return redirect(`/404error`);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return redirect(`/404error`);

    const quote = data.quoteR;

    return (
        <Container>
            <Helmet>
                <title>1001 Nuggets - {quote.quoteText}</title>
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:site" content="1001 Nuggets"></meta>
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content="1001 Nuggets" />
                <meta property="og:description" content={quote.quoteText}/>
                <meta name="twitter:description" content={quote.quoteText}/>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} Authors {`>`} <AuthorButton type={"link"} name={quote.author}/> {`>`} Quotes</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                        <Col xs={12}>
                            <Card className="mb-3 rounded">
                                <div id="quote-page">
                                    <Card.Body className="pt-5">
                                        <Card.Text className="display-6 text-center"><span className="quote-body font-poppins" id="main-quote">{quote.quoteText}</span></Card.Text>
                                        <Card.Text className="text-end pe-2"><strong><AuthorButton whitened={true} type={"link"} name={quote.author}/></strong></Card.Text>
                                    </Card.Body>
                                    <Card.Body className="text-center">
                                        <a className="mx-2 share-button" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${window.location.href} - "${quote.quoteText}"`} id="share-X"><FaXTwitter/></a>
                                        <a className="mx-2 share-button" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href} - "${quote.quoteText}"`} id="share-facebook"><FaFacebookF/></a>
                                    </Card.Body>
                                </div>
                                {quote.topics.length && 
                                    <Card.Footer className="text-center py-3">
                                        <div className="mb-2">
                                            {quote.topics.map((index) => (
                                                <TopicButton key={index} type={"button"} theme={"weak"} name={index}/>
                                            ))}
                                        </div>
                                        <div>
                                            {quote.relatedTopics.map((relatedTopic) => (
                                                <TopicButton key={relatedTopic} type={"button"} theme={"small"} name={relatedTopic}/>
                                            ))}
                                        </div>
                                    </Card.Footer>
                                }
                                <Card.Footer className="text-center">
                                    <Button variant={"weak"} onClick={MobileShare}>
                                        <FiShare/>
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

function MobileShare() {
    if(navigator.canShare) {
        navigator.share({
        title:"1001 Nuggets",
        url: window.location.href
        });
    } else {
        alert("Cannot navigate")
    }
}

export default Quote;