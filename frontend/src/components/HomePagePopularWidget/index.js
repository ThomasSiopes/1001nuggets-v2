import React from "react";

import { Card, Col, Row, Button } from "react-bootstrap";

function List({inputList, type}) {    
    return (
        <Col>
            <p>Popular {type}s</p>
                {inputList.map((item, index) => (
                    <p className="mb-0" key={index}>
                        <a href={`/${type === "Proverb" ? "Author" : type}/${item.realID}`}>{item.name}</a>
                    </p>
                ))}
                {type === "Author" || type === "Topic" ? <Button variant={"theme"} className="my-2" href={`/${type}s`}>More {type}s</Button> : null}
        </Col>
    )
}

function HomePagePopularWidget() {
    const authorList = [
        {name: "Author 1", realID: "author1"}, 
        {name: "Author 2", realID: "author2"}, 
        {name: "Author 3", realID: "author3"}, 
        {name: "Author 4", realID: "author4"}, 
        {name: "Author 5", realID: "author5"}
    ]
    const topicList = [
        {name: "Topic 1", realID: "topic1"}, 
        {name: "Topic 2", realID: "topic2"}, 
        {name: "Topic 3", realID: "topic3"}, 
        {name: "Topic 4", realID: "topic4"}, 
        {name: "Topic 5", realID: "topic5"}
    ]
    const proverbList = [
        {name: "Proverb 1", realID: "proverb1"}, 
        {name: "Proverb 2", realID: "proverb2"}, 
        {name: "Proverb 3", realID: "proverb3"}, 
        {name: "Proverb 4", realID: "proverb4"}, 
        {name: "Proverb 5", realID: "proverb5"},
        {name: "Proverb 6", realID: "proverb6"},
        {name: "Proverb 7", realID: "proverb7"},
    ]

    return(
        <Card>
            <Card.Body>
                <Row>
                    <List inputList={authorList} type="Author"/>
                    <List inputList={topicList} type="Topic"/>
                    <List inputList={proverbList} type="Proverb"/>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default HomePagePopularWidget;