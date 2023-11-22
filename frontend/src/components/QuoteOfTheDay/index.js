import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthorButton from "../AuthorButton";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

function QuoteOfTheDay(){
    let {loading, data} = useQuery(QUERY_QUOTE_ALL)
    if(loading) return <p>Loading...</p>

    const quotes = data.quotes;
    const randIndex = Math.floor(Math.random() * 100)
    const QOTD = quotes[randIndex]

    return(
        <div>
            <Card className="my-4">
                <Card.Header>Quote of the Day</Card.Header>
                <Card.Body className="quote-card">
                    <Link to={"/quote/" + QOTD.realID}>
                        <Card.Text className="text-white">
                            <strong>
                                <p>{QOTD.quoteText}</p>
                            </strong>
                        </Card.Text>
                    </Link>
                    <Card.Text>
                        <strong>{QOTD.author && <AuthorButton type="link" name={QOTD.author}/>}</strong>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuoteOfTheDay;