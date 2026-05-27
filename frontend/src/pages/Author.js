import React, {useMemo} from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function Author () {
    const { authorRealId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_REALID, {
        variables: {authorRealId: authorRealId}, fetchPolicy: "cache-and-network"
    });

    const { list1, list2, list3a, list3b, newIndexOrder } = useMemo(() => {
            const quotes = data?.authorR.quotes;
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

    if(!authorRealId || authorRealId === null || authorRealId === "undefined") return <Navigate to={`/authors`}/>;

    if(!loading && !data) return <Navigate to="/404error" replace />;

    const author = data?.authorR;

    let extraAuthors = null;
    if(author?.relatedAuthors?.[0]) extraAuthors = author.relatedAuthors;

    return (
        <>
        <LoadingOverlay show={loading && !data} />
        {author && <HelmetProvider>
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {author.name}</title>
                <meta name="description" content={`Read quotes by ${author.name} on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${author.name}`} />
                <meta property="og:description" content={`Read quotes by ${author.name} on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/author/${authorRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/author/${authorRealId}`} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": author.name,
                    "url": `https://www.1001nuggets.com/author/${authorRealId}`,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://www.1001nuggets.com/author/${authorRealId}`
                    }
                })}</script>
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
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
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
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
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
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        </HelmetProvider>}
        </>
    )
}

export default Author;