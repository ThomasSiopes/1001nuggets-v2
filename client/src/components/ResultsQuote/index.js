import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Col, Row } from "react-bootstrap";

import QuoteCard from "../QuoteCard";

import { QUERY_QUOTE_ALL } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, newList = [];

    let {loading, data} = useQuery(QUERY_QUOTE_ALL);
    quoteList = data;

    input = input.toUpperCase();
    
    if(loading) return <p>Loading...</p>

    for(let index of quoteList.quotes) {
        if(index.quoteText.toUpperCase().indexOf(input) > -1) newList.push(index);
    }

    return (newList[0] ?
        <Container className="mb-2">
            <div>
                <h5>Results under quotes . . .</h5>
                <hr></hr>
                <Row className="text-center">
                    {newList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={newList} quoteIndex={newList.indexOf(index)}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
        :
        <Container>
            <h5>No results under quotes...</h5>
        </Container>    
    )
}

export default ResultsQuote;
