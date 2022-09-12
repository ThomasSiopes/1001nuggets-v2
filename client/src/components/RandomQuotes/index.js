import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button, Carousel } from "react-bootstrap";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

const RandomAuthors = () => {
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
        <Carousel variant="dark" indicators={false} controls={true} nextIcon={<Button variant={"light"}><strong>{`>`}</strong></Button>} prevIcon={<Button variant={"light"}><strong>{`<`}</strong></Button>}>
            {randomQuotes.map((index) => (
                <Carousel.Item key={"Carousel" + index.realID}>
                        <Card>
                            <Card.Header className="text-center">Random Quote</Card.Header>
                            <Link to={`/quote/${index.realID}`}>
                                <Card.Body className="pb-0">
                                    <Card.Text className="text-black font-poppins"><i>" {index.quoteText} "</i></Card.Text>
                                </Card.Body>
                            </Link>
                            <Card.Body className="pb-4"><Card.Text><strong><AuthorButton type={"link"} name={index.author}/></strong></Card.Text></Card.Body>
                            {index.topics.length !== 0 &&
                                <Card.Footer className="text-center">
                                    {index.topics.map((index2) => (
                                        <span key={index2} className="mx-1"><TopicButton type={"button"} name={index2}/></span>
                                    ))}
                                </Card.Footer>
                            }
                        </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default RandomAuthors;