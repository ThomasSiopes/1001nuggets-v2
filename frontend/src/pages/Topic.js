import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_TOPIC_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const AdComponent = React.lazy(()=> import("../components/AdComponent"));
const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function Topic () {
    const { topicRealId } = useParams();
    let {loading, data} = useQuery(QUERY_TOPIC_REALID, {
        variables: {topicRealId: topicRealId}, fetchPolicy: "cache-first"
    });

    const { list1, list2, list3a, list3b, newIndexOrder } = useMemo(() => {
        const quotes = data?.topicR.quotes;
        if(!quotes) return { list1:[], list2:[], list3a:[], list3b:[], newIndexOrder:[] };

        let indexList = quotes.map((_, i) => i);
        indexList = shuffle(indexList);

        let result = [];
        for(let n = 3; n > 0; --n) {
            result.push(indexList.splice(0, Math.ceil(indexList.length / n)));
        }

        const list1 = result[0];
        const list2 = result[2];
        const middleIndex = Math.ceil(result[1].length / 2);
        const list3a = result[1].splice(0, middleIndex);
        const list3b = result[1].splice(-middleIndex);
        const newIndexOrder = [...list1, ...list3a, ...list3b, ...list2];

        return{ list1, list2, list3a, list3b, newIndexOrder };
    }, [data]);

    if(!topicRealId || topicRealId === null || topicRealId === "undefined") return <Navigate to="/topics" replace />;

    if(loading) return <p>Loading...</p>

    if(!data) return <Navigate to="/404error" replace />;

    const topic = data.topicR;

    return (
        <Container  className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {topic.name}</title>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded">Home {`>`} <Link className="link-theme" to={`/topics`}>Topics</Link> {`>`} {topic.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    <Row>
                        {/* First Quote Column */}
                        <Col xs={12} md={6} lg={4}>
                            <Row>
                                {list1 && list1.map((index) => (
                                    <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                                <Col xs={12} className="mb-3"><AdComponent/></Col>
                                {list3a && list3a.map((index) => (
                                    <Col xs={12} className="mb-3 d-xs-block d-lg-none" key={"false" + topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        {/* Middle Quote Column */}
                        <Col lg={4}>
                            <Row>
                                {list3a && list3a.map((index) => (
                                    <Col xs={12} className="mb-3 d-none d-lg-block" key={topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                                {list3b && list3b.map((index) => (
                                    <Col xs={12} className="mb-3 d-none d-lg-block" key={topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        
                        {/* Last Quote Column */}
                        <Col xs={12} md={6} lg={4}>
                            <Row>
                                {list3b && list3b.map((index) => (
                                    <Col xs={12} className="mb-3 d-xs-block d-lg-none" key={"false" + topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                                <Col xs={12} className="mb-3"><AdComponent/></Col>
                                {list2 && list2.map((index) => (
                                    <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                        <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                    </Col>
                                ))}
                                <Col xs={12} className="mb-3"><AdComponent/></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Topic;