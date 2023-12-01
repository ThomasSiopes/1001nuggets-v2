import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import AuthorButton from "../AuthorButton";
import TopicButton from "../TopicButton";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import { QUERY_QOTD, QUERY_QUOTE_REALID } from "../../utils/queries";

function QuoteOfTheDay(){
    let {loading, data} = useQuery(QUERY_QOTD)
    if(loading) return <p>Loading...</p>

    const QOTD = data.dailyQuote[0].index

    return(
        <QuoteCard realID={QOTD}/>
    )
}

function QuoteCard({realID}) {
    let {loading, data} = useQuery(QUERY_QUOTE_REALID, {
        variables: {quoteRealId: realID},
    })
    if(loading) return <p>Loading quote card...</p>

    const Quote = data.quoteR

    return(
        <div>
            <Card className="my-4">
                <Card.Header>
                    <h1>Quote of the Day</h1>
                </Card.Header>
                <div id="quote-page">
                    <Card.Body>
                        <Card.Text className="display-6 text-center"><span className="quote-body font-poppins" id="main-quote">{Quote.quoteText}</span></Card.Text>
                        <Card.Text className="text-end pe-2"><strong><AuthorButton type={"link"} name={Quote.author}/></strong></Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <a className="mx-2 share-button" href={`https://twitter.com/intent/tweet?url=${window.location.href}/quote/${Quote.realID}`} id="share-twitter"><FaTwitter/></a>
                        <a className="mx-2 share-button" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}/quote/${Quote.realID}`} id="share-facebook"><FaFacebookF/></a>
                    </Card.Body>
                </div>
                {Quote.topics.length !== 0 && 
                    <Card.Footer className="text-center py-3">
                            {Quote.topics.map((index) => (
                                <TopicButton key={index} type={"button"} theme={"theme"} name={index}/>
                            ))}
                    </Card.Footer>
                }
            </Card>
        </div>
    )
}

export default QuoteOfTheDay;