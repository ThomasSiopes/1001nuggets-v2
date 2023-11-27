import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthorButton from "../AuthorButton";

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
                <Card.Header>Quote of the Day</Card.Header>
                <Card.Body className="quote-card">
                    <Link to={"/quote/" + Quote.realID}>
                        <Card.Text className="text-white">
                            <strong>
                                <p>{Quote.quoteText}</p>
                            </strong>
                        </Card.Text>
                    </Link>
                    <Card.Text>
                        <strong>{Quote.author && <AuthorButton type="link" name={Quote.author}/>}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuoteOfTheDay;