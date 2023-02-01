import React from "react";
import { useQuery } from "@apollo/client";

import { Card, Button, Carousel } from "react-bootstrap";

import AuthorButton from "../AuthorButton";
import TopicButton from "../TopicButton";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

const RandomQuotes = () => {
    const { loading, data } = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <p>Loading...</p>

    const quotes = data.quotes;
    let randomQuotes = [];
    let current;

    for(let i = 0; (i < 50) && (randomQuotes.length < 20); ++i) {
        current = quotes[Math.floor(Math.random() * quotes.length)];
        if(!(randomQuotes.includes(current))) {
            randomQuotes.push(current);
        }
    }
    
    return(
        <Card>
            <Card.Header className="text-center">Random Quotes</Card.Header>
            <Card.Body>
                <Carousel variant="dark" indicators={false} controls={true} nextIcon={<Button variant={"light"}><strong>{`→`}</strong></Button>} prevIcon={<Button variant={"light"}><strong>{`←`}</strong></Button>}>
                    {randomQuotes.map((index) => (
                        <Carousel.Item key={"Carousel" + index.realID}>
                            <Card>
                                <Card.Body>
                                    <Card.Text className="font-poppins">"{index.quoteText}"</Card.Text>
                                    <strong><AuthorButton type={"link"} name={index.author}/></strong>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    {index.topics.length > 0 && 
                                        <span>
                                            {index.topics.map((topic) => (
                                                <TopicButton type={"button"} name={topic} key={index.quoteText + topic}/>
                                            ))}
                                        </span>
                                    }
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Card.Body>
        </Card>
    )
}

export default RandomQuotes;