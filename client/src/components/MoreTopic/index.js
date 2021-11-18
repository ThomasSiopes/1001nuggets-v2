import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card } from "react-bootstrap";

import { QUERY_TOPIC_NAME } from "../../utils/queries";

const MoreAuthor = ({parent, name}) => {
    const { loading, data } = useQuery(QUERY_TOPIC_NAME, {
        variables: {
            name: name
        }});

    if(loading) return <p>Loading...</p>

    const topic = data.topicName;

    let quoteList = [];
    let escape = 0, randomElement;

    while(quoteList.length < 3 && !escape) {
        randomElement = topic.quotes[Math.floor(Math.random() * topic.quotes.length)]
        if(!(quoteList.includes(randomElement)) && randomElement !== parent) quoteList.push(randomElement);
        if(topic.quotes.length <= 3) {
            if(quoteList.length === (topic.quotes.length-1)) escape = 1;
        } 
    }
    
    return(
        <Card className="text-center">
            <Card.Header>More quotes about {topic.name}</Card.Header>
            <Card.Body>
                {quoteList.map((index) => (
                    <Card.Text key={index.quoteText}>
                        <Link to={`/quote/${index._id}`} className="link-theme"><strong>"{index.quoteText}"</strong></Link>
                    </Card.Text>
                ))}
            </Card.Body>
        </Card>
    )
}

export default MoreAuthor;