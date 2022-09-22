import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

const QuoteCard = ({quote}) => {
    if(quote) return ( 
        <Card>
            <Link to={`/quote/${quote.realID}`} className="text-black">
                <Card.Body>
                    <Card.Text className="font-poppins">"{quote.quoteText}"</Card.Text>
                </Card.Body>
            </Link>
            <Card.Body>
                <Card.Text className="text-end me-2">- <strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
            </Card.Body>
            {quote.topics.length > 0 && 
                <Card.Footer className="text-center">
                    {quote.topics.map((topic) => (
                        <TopicButton className="mb-2" type={"button"} name={topic} key={quote.quoteText + topic}/>
                    ))}
                </Card.Footer>
            }
        </Card>
    )
    else return <p>Loading...</p>
}

export default QuoteCard;