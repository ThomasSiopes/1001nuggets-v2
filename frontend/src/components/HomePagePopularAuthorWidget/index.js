import React from "react";

import { Card, Row, Col } from "react-bootstrap";

function HomePagePopularAuthorWidget() {
    const popularAuthors = [
        {name: "Author 1", realID: "author1"},
        {name: "Author 2", realID: "author2"},
        {name: "Author 3", realID: "author3"},
        {name: "Author 4", realID: "author4"},
        {name: "Author 5", realID: "author5"},
        {name: "Author 6", realID: "author6"},
        {name: "Author 7", realID: "author7"},
        {name: "Author 8", realID: "author8"},
        {name: "Author 9", realID: "author9"},
        {name: "Author 10", realID: "author10"},
        {name: "Author 11", realID: "author11"},
        {name: "Author 12", realID: "author12"},
        {name: "Author 1", realID: "author1"},
        {name: "Author 2", realID: "author2"},
        {name: "Author 3", realID: "author3"},
        {name: "Author 4", realID: "author4"},
        {name: "Author 5", realID: "author5"},
        {name: "Author 6", realID: "author6"},
        {name: "Author 7", realID: "author7"},
        {name: "Author 8", realID: "author8"},
        {name: "Author 9", realID: "author9"},
        {name: "Author 10", realID: "author10"},
        {name: "Author 11", realID: "author11"},
        {name: "Author 12", realID: "author12"},
        {name: "Author 1", realID: "author1"},
        {name: "Author 2", realID: "author2"},
        {name: "Author 3", realID: "author3"},
        {name: "Author 4", realID: "author4"},
        {name: "Author 5", realID: "author5"},
        {name: "Author 6", realID: "author6"},
        {name: "Author 7", realID: "author7"},
        {name: "Author 8", realID: "author8"},
        {name: "Author 9", realID: "author9"},
        {name: "Author 10", realID: "author10"},
        {name: "Author 11", realID: "author11"},
        {name: "Author 12", realID: "author12"},
        {name: "Author 1", realID: "author1"},
        {name: "Author 2", realID: "author2"},
        {name: "Author 3", realID: "author3"},
        {name: "Author 4", realID: "author4"},
        {name: "Author 5", realID: "author5"},
        {name: "Author 6", realID: "author6"},
        {name: "Author 7", realID: "author7"},
        {name: "Author 8", realID: "author8"},
        {name: "Author 9", realID: "author9"},
        {name: "Author 10", realID: "author10"},
        {name: "Author 11", realID: "author11"},
        {name: "Author 12", realID: "author12"},
    ]

    return (
        <Card className="my-4">
            <Card.Body>
                <Card.Text>
                    Explore popular authors and discover their quotes in the 1001 Nuggets collection.
                </Card.Text>
                <Row>
                    {popularAuthors.map((author, index) => (
                        <Col xs={6} md={4} lg={3} key={index}>
                            <a href={`/author/${author.realID}`}>{author.name}</a>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default HomePagePopularAuthorWidget;