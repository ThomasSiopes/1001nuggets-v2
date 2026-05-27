import React from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import truthSocialImage from "../assets/images/truthsocial.png";

import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";

import { QUERY_QUOTE_REALID } from "../utils/queries";

function Quote () {
    const { quoteRealId } = useParams();
    let { loading, data } = useQuery(QUERY_QUOTE_REALID, {
        variables: {quoteRealId: quoteRealId},
        fetchPolicy: "cache-and-network"
    })

    if(!quoteRealId || quoteRealId === null || quoteRealId === "undefined") return <Navigate to={`/404error`} replace/>;

    if(!loading && !data) return <Navigate to={`/404error`} replace/>;

    const quote = data?.quoteR;

    return (
        <>
        <LoadingOverlay show={loading && !data} />
        {quote && <HelmetProvider>
        <Container className="pt-5">
            <Helmet>
                <title>1001 Nuggets - {quote.quoteText}</title>
                <meta name="description" content={`"${quote.quoteText}" on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${quote.quoteText}`} />
                <meta property="og:description" content={`"${quote.quoteText}" on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/quote/${quoteRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/quote/${quoteRealId}`} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Quotation",
                    "text": quote.quoteText,
                    "spokenByCharacter": {
                        "@type": "Person",
                        "name": quote.author,
                        "url": `https://www.1001nuggets.com/author/${quote.authorRealID}`
                        },
                    "isPartOf": {
                        "@type": "WebSite",
                        "name": "1001 Nuggets",
                        "url": "https://www.1001nuggets.com"
                    }
                })}</script>
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
                                        <a className="mx-2 share-button" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${window.location.href} - "${quote.quoteText} - ${quote.author}"`} id="share-X"><FaXTwitter/></a>
                                        <a className="mx-2 share-button" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href} - "${quote.quoteText} - ${quote.author}"`} id="share-facebook"><FaFacebookF/></a>
                                        <a className="mx-2 share-button share-truth" target="_blank" rel="noreferrer" href={`https://truthsocial.com/share?text=${window.location.href} - "${quote.quoteText}" - ${quote.author}`}><img src={truthSocialImage} alt="TS" loading="lazy"/></a>
                                        <span className="mx-2" onClick={MobileShare}>
                                        <FiShare className="text-white cool-share-button"/>
                                        </span>
                                    </Card.Body>
                                </div>
                                {quote.topics.length && 
                                    <Card.Footer className="text-center py-3">
                                        <div className="mb-2">
                                            {quote.topics.map((index) => (
                                                <TopicButton key={index} type={"button"} theme={"weak"} name={index}/>
                                            ))}
                                        </div>
                                        <div className="text-start text-theme mx-2">
                                            {quote.relatedTopics.map((relatedTopic) => (
                                                <span>
                                                    {
                                                        relatedTopic === quote.relatedTopics[quote.relatedTopics.length-1] ?
                                                            <span><u><TopicButton key={relatedTopic} type={"link"} theme={"related"} name={relatedTopic}/></u></span>
                                                            :
                                                            <span><u><TopicButton key={relatedTopic} type={"link"} theme={"related"} name={relatedTopic}/></u>; </span>
                                                    }
                                                </span>
                                            ))}
                                            {quote.unrelatedTopics.map((unrelatedTopic) => (
                                                <span>; <u><TopicButton key={unrelatedTopic} type={"link"} theme={"unrelated"} name={unrelatedTopic}/></u> </span>
                                            ))}
                                        </div>
                                    </Card.Footer>
                                }
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        </HelmetProvider>}
        </>
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