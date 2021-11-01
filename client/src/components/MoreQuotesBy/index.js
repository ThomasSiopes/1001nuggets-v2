import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

const MoreQuotesBy = ({quote}) => {
    let {loading, data} = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <span>Loading...</span>

    let similarQuotes = [];
    let topicCheck;
    let quotePile = data.quotes;

    for(let i = 0; (i < quotePile.length) && (similarQuotes.length < 5); ++i) {
        let currentQuote = quotePile[Math.floor(Math.random() * (quotePile.length-1))];
        topicCheck = currentQuote.topics.filter(element => quote.topics.includes(element));
        if((topicCheck !== "") && (currentQuote.quoteText !== quote.quoteText) && !(similarQuotes.includes(currentQuote))) similarQuotes.push(currentQuote);
    }

    if(similarQuotes.length <= 0) return null;

    return (
        <Card bg={"theme"}>
            <Card.Header>Similar Quotes</Card.Header>
            <Card.Body>
                {similarQuotes.map((index) => (
                    <Link to={`/quote/${index._id}`} key={index.quoteText}><Button variant={"theme"} className="mb-3"><i>"{index.quoteText}"</i> - {index.author}</Button></Link>
                ))}
            </Card.Body>
        </Card>
    )
}

export default MoreQuotesBy;