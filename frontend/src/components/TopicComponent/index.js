import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { Container, Col, Modal, Row } from "react-bootstrap";

import { QUERY_TOPIC_REALID } from "../../utils/queries";
import shuffle from "../../utils/shuffle";

const QuoteCard = React.lazy(() => import("../QuoteCard"));

function TopicComponent({name, realID}){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <p onClick={handleShow} className="link-theme"><strong>{name}</strong></p>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="width80">
                <Modal.Header>
                    <p onClick={handleClose} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body>
                    <Topic realID={realID}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

function Topic({realID}) {
    let{loading, data} = useQuery(QUERY_TOPIC_REALID, {
        variables: {topicRealId: realID}
    });

    if(loading) return <div>Loading...</div>

    const topic = data.topicR;

    let indexList = [];

    for(let i = 0; i < topic.quotes.length; ++i) {
        if(!(topic.quotes[i].somePeople)) indexList.push(i);
    }

    if(!indexList) return <p>Loading...</p>

    indexList = shuffle(indexList);

    let list1;
    let list2;
    let list3a;
    let list3b;
    if(topic.quotes) {
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

    return(
        <Container>
            <Row>
                 {/* First Quote Column */}
                 <Col xs={12} md={6} lg={4}>
                    {list1 && 
                        <Row>
                            {list1.map((index) => (
                                <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                </Col>
                            ))}
                        </Row>
                    }
                    {
                        list3a &&
                        <Row className="d-xs-block d-lg-none">
                            {list3a.map((index) => (
                                <Col xs={12} className="mb-3" key={"false" + topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                </Col>
                            ))}
                        </Row>
                    }
                    {list3b && 
                        <Row>
                            {list3b.map((index) => (
                                <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
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
                                <Col xs={12} className="mb-3" key={"false" + topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                </Col>
                            ))}
                        </Row>
                    }
                    {list2 && 
                        <Row>
                            {list2.map((index) => (
                                <Col xs={12} className="mb-3" key={topic.quotes[index].quoteText}>
                                    <QuoteCard quotes={topic.quotes} quoteIndex={index} indexOrder={list1.concat(list3a.concat(list3b.concat(list2)))}/>
                                </Col>
                            ))}
                        </Row>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default TopicComponent;