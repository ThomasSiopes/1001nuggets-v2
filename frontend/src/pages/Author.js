import React from "react";
import { Helmet } from "react-helmet";
import { redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function Author () {
    const { authorRealId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_REALID, {
        variables: {authorRealId: authorRealId },
    });

    if(!authorRealId || authorRealId === null || authorRealId === "undefined") return redirect(`/404error`); 

    if(loading) return <div className="loadingPage">Loading...</div>;

    if(!data) return redirect(`/404error`);

    const author = data.authorR;

    let indexList = [];

    // for(let n = 0; ((n < author.quotes.length) && (n < 9)); ++n) {
    //     indexList.push(n)
    // }

    for(let n = 0; (n < author.quotes.length); ++n) {
        indexList.push(n)
    }

    if(!indexList) return <p>Loading...</p>

    indexList = shuffle(indexList);

    let list1 
    let list2 
    let list3a
    let list3b
    if(indexList && author.quotes) {
        let result = [];
        for(let i = 3; i > 0; --i) {
            result.push(indexList.splice(0, Math.ceil(indexList.length / i)))
        }
        list1 = result[0];
        list2 = result[2];
        
        let middleIndex = Math.ceil(result[1].length/2);
        list3a = result[1].splice(0,middleIndex);
        list3b = result[1].splice(-middleIndex);
    }

    return (        
        <Container>
            <Helmet>
                <title>1001 Nuggets - {author.name}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} Authors {`>`} {author.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                         {/* First Quote Column */}
                         <Col xs={12} md={6} lg={4}>
                            {list1 && 
                                <Row>
                                    {list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                        <Col xs={12} className="mb-3" key={"false" + author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard quotes={author.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Author;