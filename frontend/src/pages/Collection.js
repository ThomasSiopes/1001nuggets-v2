import React from "react";
import { Helmet } from "react-helmet";
import { Link, redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_COLLECTION_REALID } from "../utils/queries";

const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function shuffleSortedName(array) {
    console.log(array.sort(function(a, b) { 
        return a.topics[0].localeCompare(b.topics[0]);
        // var nameA = a.topics[0];
        // var nameB = b.topics[0];
        // var checkA = false;
        // var checkB = false;

        // if((nameA.charAt(0) === "\"") || (nameA.charAt(0) === "'")) {
        //     checkA = true;
        // }

        // if((nameB.charAt(0) === "\"") || (nameB.charAt(0) === "'")) { 
        //     checkB = true;
        // }
        
        // if(checkA && checkB) {
        //     return (nameA.charAt(1) - nameB.charAt(1))} 
        // else if(checkA) {
        //     return (nameA.charAt(1) - nameB.charAt(0))} 
        // else if(checkB) {
        //     return (nameA.charAt(0) - nameB.charAt(1))}
        // else { 
        //     return (nameA.charAt(0) - nameB.charAt(0))
        // }
    }))
    console.log("How the array be sorted: ")
    console.log(array);
    return array;
}

function COLLECTION () {
    const { collectionRealId } = useParams();
    let {loading, data} = useQuery(QUERY_COLLECTION_REALID, {
        variables: {collectionRealId: collectionRealId},
    });

    if(!collectionRealId || collectionRealId === null || collectionRealId === "undefined") return redirect(`/collections`);

    if(loading) return <p>Loading...</p>

    if(!data) return redirect(`/404error`);

    const collection = data.collectionR
    
    let quoteList = collection.quotes.map((item) => Object.assign({}, item, {selected:false}));
    let sortedList = shuffleSortedName(quoteList);

    let indexOrder = []
    for(let i = 0; i < sortedList.length; ++i) indexOrder.push(i);

    return (
        <Container>
            <Helmet>
                <title>1001 Nuggets - {collection.name}</title>
            </Helmet>
            <Card>
                <Card.Header>Home {`>`} <Link className="link-theme" to={`/collections`}>Collections</Link> {`>`} {collection.name}</Card.Header>
                <Card.Body>
                    <Row>
                        {sortedList.map((index) => (
                            <Col xs={12} md={6} xl={4} className="mb-3" key={index.quoteText}>
                                <QuoteCard quotes={sortedList} quoteIndex={sortedList.indexOf(index)} indexOrder={indexOrder}/>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default COLLECTION;