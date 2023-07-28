import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Col, Row } from "react-bootstrap";

import QuoteCard from "../QuoteCard";

import { QUERY_QUOTE_RESULT } from '../../utils/queries';

const ResultsQuote = ({input}) => {
    let quoteList, listOrder=[];

    let {loading, data} = useQuery(QUERY_QUOTE_RESULT, {
        variables: {input: input},
    })

    if(loading) return <p>Loading...</p>

    quoteList = data.quoteResult;

    for(let n = 0; n < quoteList.length; ++n) {
        listOrder.push(n);
    }

    return (quoteList[0] ?
        <Container className="mb-2">
            <div>
                <h5>Results under quotes . . .</h5>
                <hr></hr>
                <Row className="text-center">
                    {quoteList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={quoteList} quoteIndex={quoteList.indexOf(index)} indexOrder={listOrder}/>
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
