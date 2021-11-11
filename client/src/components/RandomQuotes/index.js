import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button, Carousel, Row, Col } from "react-bootstrap";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

const RandomAuthors = () => {
    const { loading, data } = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <p>Loading...</p>

    const quotes = data.quotes;
    let randomQuotes = []

    for(let i = 0; i < 20; ++i) {
        randomQuotes.push(quotes[Math.floor(Math.random() * quotes.length)]);
    }
    
    return(
        <Carousel variant="dark" indicators={false} controls={true} nextIcon={<Button variant={"light"}><strong>{`>`}</strong></Button>} prevIcon={<Button variant={"light"}><strong>{`<`}</strong></Button>}>
            {randomQuotes.map((index) => (
                <Carousel.Item key={"Carousel" + index._id}>
                        <Card>
                            <Card.Header className="text-center">Random Quote</Card.Header>
                            <Link to={`/quote/${index._id}`}>
                                <Card.Body>
                                    <Card.Text className="text-black">"{index.quoteText}"</Card.Text>
                                    <Card.Text><strong><AuthorButton type={"link"} name={index.author}/></strong></Card.Text>
                                </Card.Body>
                            </Link>
                            {index.topics.length !== 0 &&
                                <Card.Footer className="text-center">
                                    {index.topics.map((index2) => (
                                        <span key={index2} className="mx-1"><TopicButton type={"button"} name={index2}/></span>
                                    ))}
                                </Card.Footer>
                            }
                        </Card>
                        {/* <Row className="mt-3">
                            <Col className="text-start"><Button variant={"theme"} className="mx-2">{`<`}</Button></Col>
                            <Col className="text-end"><Button variant={"theme"} className="mx-2">{`>`}</Button></Col>
                        </Row> */}
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default RandomAuthors;