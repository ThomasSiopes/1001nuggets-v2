import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import QuoteCard from "../components/QuoteCard";

import { QUERY_TOPIC_REALID } from "../utils/queries";

function Topic () {
    const { topicRealId } = useParams();
    let {loading, data} = useQuery(QUERY_TOPIC_REALID, {
        variables: {topicRealId: topicRealId},
    });

    if(!topicRealId || topicRealId === null || topicRealId === "undefined") return (<Redirect to={`/topics`}/>);

    if(loading) return <p>Loading...</p>

    if(!data) return (<Redirect to={`/404error`}/>);

    const topic = data.topicR;

    let quoteList = [...topic.quotes]
    let list1 
    let list2 
    let list3a
    let list3b
    let quotePlural = "quotes"
    if(quoteList) {
        if(quoteList.length === 1) quotePlural = "quote";
        let result = [];
        for(let i = 3; i > 0; --i) {
            result.push(quoteList.splice(0, Math.ceil(quoteList.length / i)))
        }
        list1 = result[0];
        list2 = result[2];
        
        let middleIndex = Math.ceil(result[1].length/2);
        list3a = result[1].splice(0,middleIndex);
        list3b = result[1].splice(-middleIndex);
    }

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - {topic.name}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/topics`}>Topics</Link> {`>`} {topic.name}</Card.Header>
                <Card.Body>
                    <Row>
                         {/* First Quote Column */}
                         <Col xs={12} md={6} lg={4}>
                            {list1 && 
                                <Row>
                                    {list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
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
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
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
                                        <Col xs={12} className="mb-3" key={"false" + index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={topic.quotes} quoteIndex={topic.quotes.indexOf(index)}/>
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

export default Topic;