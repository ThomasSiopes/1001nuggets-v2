import React, {useMemo} from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams, Navigate } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { Container, Card, Row, Col } from "react-bootstrap";

import { QUERY_EVERYWHERE_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const AdComponent = React.lazy(() => import("../components/AdComponent"));
const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function Everywhere () {
    const { everywhereRealId } = useParams();
    let {loading, data} = useQuery(QUERY_EVERYWHERE_REALID, 
        {variables: {everywhereRealId: everywhereRealId}, fetchPolicy: "cache-and-network"}
    );

    const { list1, list2, list3a, list3b, newIndexOrder } = useMemo(() => {
            const quotes = data?.everywhereR.quotes;
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

    if(!everywhereRealId || everywhereRealId === null || everywhereRealId === "undefined") return <Navigate to={`/everywheres`} replace/>;

    if(!loading && !data) return <Navigate to={`/404error`} replace/>;

    const everywhere = data?.everywhereR;

    return (
        <>
        <LoadingOverlay show={loading && !data} />
        {everywhere && <HelmetProvider>
        <Container  className="pt-3">
            <Helmet>
                <title>1001 Nuggets - {everywhere.name}</title>
                <meta name="description" content={`Read quotes from ${everywhere.name} on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${everywhere.name}`} />
                <meta property="og:description" content={`Read quotes from ${everywhere.name} on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/everywhere/${everywhereRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/everywhere/${everywhereRealId}`} />
            </Helmet>
            <Container>
                <Card bg={"transparent"} border={"none"}>
                    <Card.Header className="bg-light rounded">Home {'>'} <Link className="link-theme" to={`/everywheres`}>Everywhere</Link> {'>'} {everywhere.name}</Card.Header>
                    <Card.Body bg={"transparent"}>
                        <Row>
                            {/* First Quote Column */}
                            <Col xs={12} md={6} lg={4}>
                                <Row>
                                    {list1 && list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                    <Col xs={12} className="mb-3"><AdComponent/></Col>
                                    {list3a && list3a.map((index) => (
                                        <Col xs={12} className="mb-3 d-xs-block d-lg-none" key={"false" + everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        
                            {/* Middle Quote Column */}
                            <Col lg={4}>
                                <Row>
                                    {list3a && list3a.map((index) => (
                                        <Col xs={12} className="mb-3 d-none d-lg-block" key={everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                    {list3b && list3b.map((index) => (
                                        <Col xs={12} className="mb-3 d-none d-lg-block" key={everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            
                            {/* Last Quote Column */}
                            <Col xs={12} md={6} lg={4}>
                                <Row>
                                    {list3b && list3b.map((index) => (
                                        <Col xs={12} className="mb-3 d-xs-block d-lg-none" key={"false" + everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                    <Col xs={12} className="mb-3"><AdComponent/></Col>
                                    {list2 && list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={everywhere.quotes[index].quoteText}>
                                            <QuoteCard quotes={everywhere.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                    <Col xs={12} className="mb-3"><AdComponent/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
        </HelmetProvider>}
        </>
    )
}

export default Everywhere;