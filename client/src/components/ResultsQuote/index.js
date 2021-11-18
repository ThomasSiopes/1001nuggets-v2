import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import AuthorButton from "../AuthorButton"

import { QUERY_QUOTE_ALL } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, newList = [];

    let {loading, data} = useQuery(QUERY_QUOTE_ALL);
    quoteList = data;

    input = input.toUpperCase();
    // console.log(input);
    
    if(loading) return <p>Loading...</p>

    for(let index of quoteList.quotes) {
        if(index.quoteText.toUpperCase().indexOf(input) > -1) newList.push(index);
    }

    if(newList[0]) {
        return (
            <Container className="mb-2">
                <div>
                    <h5>Results under quotes . . .</h5>
                    <hr></hr>
                    <Row className="text-center">
                        {newList.map((index) => (
                            <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                                <Card>
                                    <Link to={`/quote/${index._id}`} className="text-black">
                                        <Card.Body className="font-poppins"><i>" {index.quoteText} "</i></Card.Body>
                                    </Link>
                                    <Card.Footer>
                                        <AuthorButton key={index.author} type={"button"} name={index.author}></AuthorButton>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h5>No results under quotes...</h5>
        </Container>
    )
}

export default ResultsQuote;
