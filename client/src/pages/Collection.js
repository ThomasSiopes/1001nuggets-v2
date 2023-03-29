import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import QuoteCard from "../components/QuoteCard";

import { QUERY_COLLECTION_REALID } from "../utils/queries";

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Collection () {
    const { collectionRealId } = useParams();
    let {loading, data} = useQuery(QUERY_COLLECTION_REALID, {
        variables: {collectionRealId: collectionRealId},
    });

    if(!collectionRealId || collectionRealId === null || collectionRealId === "undefined") return (<Redirect to={`/topics`}/>);

    if(loading) return <p>Loading...</p>

    if(!data) return (<Redirect to={`/404error`}/>);

    const collection = data.collectionR;

    let quoteList = [...collection.quotes]

    quoteList = shuffle(quoteList);

    let list1 
    let list2 
    let list3a
    let list3b
    if(quoteList) {
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
                <title>1001 Nuggets - {collection.name}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/collections`}>Collections</Link> {`>`} {collection.name}</Card.Header>
                <Card.Body>
                    <Row>
                         {/* First Quote Column */}
                         <Col xs={12} md={6} lg={4}>
                            {list1 && 
                                <Row>
                                    {list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + index.quoteText}>
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
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
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
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
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={index.quoteText}>
                                            <QuoteCard quotes={collection.quotes} quoteIndex={collection.quotes.indexOf(index)}/>
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

export default Collection;