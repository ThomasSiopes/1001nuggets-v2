import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Row, Col, Button } from "react-bootstrap";

import AuthorButton from "../AuthorButton";

import { QUERY_AUTHOR_ALL } from "../../utils/queries";

const RandomAuthors = () => {
    const { loading, data } = useQuery(QUERY_AUTHOR_ALL);

    if(loading) return <p>Loading...</p>

    const authors = data.authors;

    let newList = [];

    while (newList.length < 20) {
        let newElement = authors[Math.floor(Math.random() * authors.length)];
        if(!(newList.includes(newElement))) newList.push(newElement);
    }
    
    return(
        <Card className="text-center">
            <Card.Header>Random Authors</Card.Header>
            <Card.Body>
                <Row>
                    {newList.map((index) => (
                        <Col xs={12} md={6} className="mb-3" key={index.name}>
                            <AuthorButton type={"link"} name={index.name}/>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer>
                <Link to={`/authors`}>
                    <Button variant={"theme"}>See All Authors</Button>
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default RandomAuthors;