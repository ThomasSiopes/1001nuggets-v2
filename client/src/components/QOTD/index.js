import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useQuery} from "@apollo/client";

import { Card, Container } from "react-bootstrap";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import TopicButton from "../../components/TopicButton";
import AuthorButton from "../../components/AuthorButton";

import { QUERY_QUOTE_ID } from "../../utils/queries";

const QOTD = ({input}) => {
    const quoteId = input;
    console.log(quoteId)
    let { loading, data } = useQuery(QUERY_QUOTE_ID, {
        variables: {quoteId: quoteId},
    })

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    console.log(data);

    const quote = data.quote;

    if(quote) return (
        <Card className="mb-3">
            <Card.Header className="text-center display-6">Quote of the Day</Card.Header>
            <div id="quote-page">
                <Link to={`/quote/${quote.realID}`}>
                    <Card.Body>
                        <Container>
                            <Card.Text className="display-6"><span className="quote-body text-black font-poppins" id="main-quote">{quote.quoteText}</span></Card.Text>                    
                        </Container>
                    </Card.Body>
                </Link>
                <Card.Body>
                    <Container>
                        <Card.Text><strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
                    </Container>
                </Card.Body>
                <Card.Body className="text-center">
                    <a className="mx-2 share-button" href={`https://twitter.com/intent/tweet?url=${window.location.href}`} id="share-twitter"><FaTwitter/></a>
                    <a className="mx-2 share-button" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} id="share-facebook"><FaFacebookF/></a>
                </Card.Body>
            </div>
            {quote.topics.length !== 0 && 
                <Card.Footer className="text-center py-3">
                        {quote.topics.map((index) => (
                            <span key={index} className="mx-1"><TopicButton type={"button"} name={index}/></span>
                        ))}
                </Card.Footer>
            }
        </Card>
    )
    else return (<p>B.</p>)
}

export default QOTD;