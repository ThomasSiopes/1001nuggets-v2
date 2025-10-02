import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, redirect } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import QuoteCard from "../components/QuoteCard"

import { Container, Card, Row, Col } from "react-bootstrap";

import { QUERY_THING_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

function Thing () {
    const { thingRealId } = useParams();
    let {loading, data} = useQuery(QUERY_THING_REALID, 
        {variables: {thingRealId: thingRealId}}
    );

    if(!thingRealId || thingRealId === null || thingRealId === "undefined") return redirect(`/things`);

    if(loading) return <p>Loading...</p>

    if(!data) return redirect(`/404error`);

    const thing = data.thingR;

    console.log(data)

    let indexList = [];

    for(let i = 0; i < thing.quotes.length; ++i) {
        indexList.push(i);
    }

    if(!indexList) return <p>Loading...</p>

    indexList = shuffle(indexList);

    let list1;
    let list2;
    let list3a;
    let list3b;
    if(thing.quotes) {
        let result = [];
        for(let n = 3; n > 0; --n) {
            result.push(indexList.splice(0,Math.ceil(indexList.length / n)));
        }
        list1 = result[0];
        list2 = result[2];

        let middleIndex = Math.ceil(result[1].length/2);
        list3a = result[1].splice(0,middleIndex);
        list3b = result[1].splice(-middleIndex);
    }

    return (
        <Container  className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {thing.name}</title>
            </Helmet>
            <Container>
                <Card bg={"transparent"} border={"none"}>
                    <Card.Header className="bg-light rounded">Home {'>'} <Link className="link-theme" to={`/things`}>Thing</Link> {'>'} {thing.name}</Card.Header>
                    <Card.Body bg={"transparent"}>
                        <Row>
                            {/* First Quote Column */}
                            <Col xs={12} md={6} lg={4}>
                               {list1 && 
                                   <Row>
                                       {list1.map((index) => (
                                           <Col xs={12} className="mb-3" key={thing.quotes[index].quoteText}>
                                               <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                           </Col>
                                       ))}
                                   </Row>
                               }
                               {
                                   list3a &&
                                   <Row className="d-xs-block d-lg-none">
                                       {list3a.map((index) => (
                                           <Col xs={12} className="mb-3" key={"false" + thing.quotes[index].quoteText}>
                                               <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                           </Col>
                                       ))}
                                   </Row>
                               }
                            </Col>
                            {/* Middle Quote Column */}
                            <Col lg={4} className="d-none d-lg-block">
                                {list3a && 
                                    <Row>
                                        {list3a.map((index) => (
                                            <Col xs={12} className="mb-3" key={thing.quotes[index].quoteText}>
                                                <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                            </Col>
                                        ))}
                                    </Row>
                                }
                                {list3b && 
                                    <Row>
                                        {list3b.map((index) => (
                                            <Col xs={12} className="mb-3" key={thing.quotes[index].quoteText}>
                                                <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                            </Col>
                                        ))}
                                    </Row>
                                }
                            </Col>
                            
                            {/* Last Quote Column */}
                            <Col xs={12} md={6} lg={4}>
                                {
                                    list3b &&
                                    <Row className="d-xs-block d-lg-none">
                                        {list3b.map((index) => (
                                            <Col xs={12} className="mb-3" key={"false" + thing.quotes[index].quoteText}>
                                                <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                            </Col>
                                        ))}
                                    </Row>
                                }
                                {list2 && 
                                    <Row>
                                        {list2.map((index) => (
                                            <Col xs={12} className="mb-3" key={thing.quotes[index].quoteText}>
                                                <QuoteCard quotes={thing.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                            </Col>
                                        ))}
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Thing;