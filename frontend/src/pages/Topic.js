import React, { useMemo, useState, useEffect, useRef } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_TOPIC_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const AdComponent = React.lazy(()=> import("../components/AdComponent"));
const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

const PAGE_SIZE = 15;

function Topic () {
    const { topicRealId } = useParams();

    const [offset, setOffset] = useState(0);
    // ref for sentinel element
    const sentinelRef = useRef(null);

    const {loading, data, fetchMore} = useQuery(QUERY_TOPIC_REALID, {
        variables: {topicRealId: topicRealId, offset: 0, limit: PAGE_SIZE}, fetchPolicy: "cache-and-network"
    });

    const quoteCount = data?.topicR?.quoteCount ?? 0;
    const loadedCount = data?.topicR?.quotes?.length ?? 0;
    const hasMore = loadedCount < quoteCount;

    useEffect(() => {
        if(!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting && hasMore && !loading) {
                    const nextOffset = offset + PAGE_SIZE;
                    setOffset(nextOffset);
                    fetchMore({
                        variables: {topicRealId, offset: nextOffset, limit:PAGE_SIZE},
                        updateQuery:(prev, {fetchMoreResult}) => {
                            if(!fetchMoreResult?.topicR?.quotes?.length) return prev;
                            return{
                                topicR: {
                                    ...prev.topicR,
                                    quotes: [
                                        ...prev.topicR.quotes,
                                        ...fetchMoreResult.topicR.quotes,
                                    ]
                                }
                            }
                        }
                    })
                }
            }, {rootMargin: "300px"}
        );

        observer.observe(sentinelRef.current);
        return() => observer.disconnect();
    }, [hasMore, loading, offset, topicRealId, fetchMore]);

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

    if(!loading && !data) return <Navigate to="/404error" replace />;

    const topic = data?.topicR;

    return (
        <>
        <LoadingOverlay show={loading && !data} />
        {topic && <HelmetProvider>
        <Container  className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {topic.name}</title>
                <meta name="description" content={`Read quotes under the topic of ${topic.name} on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${topic.name}`} />
                <meta property="og:description" content={`Read quotes under the topic of ${topic.name} on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/topic/${topicRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/topic/${topicRealId}`} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": `${topic.name} Quotes`,
                    "description": `Read quotes under the topic of ${topic.name} on 1001 Nuggets.`,
                    "url": `https://www.1001nuggets.com/topic/${topicRealId}`,
                    "numberOfItems": topic.quoteCount
                })}</script>
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

                    <div ref={sentinelRef} style={{height:1}}/>
                </Card.Body>
            </Card>
        </Container>
        </HelmetProvider>}
        </>
    )
}

export default Topic;