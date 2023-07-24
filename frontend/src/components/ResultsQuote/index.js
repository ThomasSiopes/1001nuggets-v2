import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Col, Row } from "react-bootstrap";

import QuoteCard from "../QuoteCard";

import { QUERY_QUOTE_ALL } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, newList = [], listOrder=[];

    console.log("input: " + input);

    let {loading, data} = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <p>Loading...</p>

    quoteList = data;

    input = input.toUpperCase();
    
    let counter = 0;
    for(let index of quoteList.quotes) {
        if(index.quoteText.toUpperCase().indexOf(input) > -1) {
            newList.push(index);
            listOrder.push(counter++)
        }
    }

    return (newList[0] ?
        <Container className="mb-2">
            <div>
                <h5>Results under quotes . . .</h5>
                <hr></hr>
                <Row className="text-center">
                    {newList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={newList} quoteIndex={newList.indexOf(index)} indexOrder={listOrder}/>
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
