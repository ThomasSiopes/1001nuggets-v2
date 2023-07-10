import React from "react";
import { Helmet } from "react-helmet";
import { redirect } from "react-router-dom";
import { useQuery} from "@apollo/client";
// import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import QuoteCard from "../components/QuoteCard";

import { QUERY_QUOTE_SP } from "../utils/queries";
import shuffle from "../utils/shuffle";

function SomePeople () {
    let {loading, data} = useQuery(QUERY_QUOTE_SP);

    if(loading) return <p>Loading...</p>

    if(!data) return redirect(`/404error`);

    const quoteList = data.quoteSP;

    let indexList = [];

    for(let n = 0; n < quoteList.length; ++n) {
        indexList.push(n);
    }

    if(!indexList || indexList === []) return <p>Loading...</p>

    indexList = shuffle(indexList);

    let list1 
    let list2
    let list3a
    let list3b
    if(quoteList) {
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
            {/* <MetaTags>
                <title>1001 Nuggets - Some People</title>
            </MetaTags> */}
            <Helmet>
                <title>1001 Nuggets - Some People</title>
            </Helmet>
            <Card>
                <Card.Header>Home {`>`} Some People</Card.Header>
                <Card.Body>
                    <Row>
                         {/* First Quote Column */}
                         <Col xs={12} md={6} lg={4}>
                            {list1 && 
                                <Row>
                                    {list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                        <Col xs={12} className="mb-3" key={quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                        <Col xs={12} className="mb-3" key={"false" + quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={quoteList[index].quoteText}>
                                            <QuoteCard quotes={quoteList} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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

export default SomePeople;