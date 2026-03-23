import React, { Suspense } from 'react';
import { useQuery } from '@apollo/client';
import { Container, Col, Row } from "react-bootstrap";

import { QUERY_QUOTE_RESULT } from '../../utils/queries';

const QuoteCard = React.lazy(() => import("../QuoteCard"));

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
            <Suspense fallback={<p>Loading...</p>}>
                <h5>Search Results for "{input}" . . .</h5>
                <hr></hr>
                <Row className="text-center">
                    {quoteList.map((index, i) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={quoteList} quoteIndex={i} indexOrder={listOrder}/>
                        </Col>
                    ))}
                </Row>
            </Suspense>
        </Container>
        :
        <Container>
            <h5>No results under quotes...</h5>
        </Container>    
    )
}

export default ResultsQuote;
