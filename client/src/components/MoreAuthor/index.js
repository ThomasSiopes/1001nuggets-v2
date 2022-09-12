import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Col } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const MoreAuthor = ({name, parent}) => {
    const { loading, data } = useQuery(QUERY_AUTHOR_NAME, {
        variables: {
            name: name
        }});

    if(loading) return <p>Loading...</p>

    const author = data.authorName;

    let quoteList = [];
    let escape = 0, iterator = 10, randomElement;

    while(quoteList.length < 3 && !escape && iterator) {
        iterator--
        randomElement = author.quotes[Math.floor(Math.random() * author.quotes.length)]
        if(!(quoteList.includes(randomElement)) && randomElement !== parent) quoteList.push(randomElement);
        if(author.quotes.length <= 3) {
            if(quoteList.length === (author.quotes.length-1)) escape = 1;
        }
    }
    
    if(quoteList.length) {
        if(parent.topics[0]) {
            return(
                <Col xs={12} md={6} className="mb-3">
                    <Card className="text-center">
                        <Card.Header>More quotes by {author.name}</Card.Header>
                        <Card.Body>
                            {quoteList.map((index) => (
                                <Card.Text key={index.quoteText}>
                                    <Link to={`/quote/${index.realID}`} className="link-theme"><strong>"{index.quoteText}"</strong></Link>
                                </Card.Text>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
        else return(
            <Col className="mb-3">
                <Card className="text-center">
                    <Card.Header>More quotes by {author.name}</Card.Header>
                    <Card.Body>
                        {quoteList.map((index) => (
                            <Card.Text key={index.quoteText}>
                                <Link to={`/quote/${index.realID}`} className="link-theme"><strong>"{index.quoteText}"</strong></Link>
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
    else return null;
}

export default MoreAuthor;