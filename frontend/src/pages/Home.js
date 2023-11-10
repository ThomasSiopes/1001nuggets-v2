import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";
import { Card, Container, Button, Col, Row, Form, Modal } from "react-bootstrap"

import { QUERY_QUOTE_RESULT } from "../utils/queries";

const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

function Home () {    
    const [show, setShow] = useState(false);
    const value = useRef('');

    const handleChange = () => {        
        let searchBar = document.getElementById("searchHome");
        value.current = searchBar.value;
    }

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    }

    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="text-center">
                <Card className="border-none">
                    <Card.Header className="bg-theme">
                        <h1 className="font-victor-libre text-white">1001 NUGGETS</h1>
                    </Card.Header>
                    <Card.Body className="px-5">
                        <Form className="row" onSubmit={handleShow}>
                            <Col xs={8} className="align-items-center d-flex px-1">
                                <input type="text" placeholder="Search 1001 Nuggets..." id="searchHome" className="formInput rounded text-center" onChange={handleChange}></input>
                            </Col>
                            <Col xs={4} className="px-1">
                                <input className="btn btn-theme btn-block" type="submit" value="Search" readOnly/>
                            </Col>
                        </Form>
                    </Card.Body>
                    <Card.Footer className="px-5">
                        <Button variant={"theme"} href={`/topics`} className="btn-block my-3">Topics</Button>
                        <Button variant={"theme"} href={`/collections`} className="btn-block my-3">Collections</Button>
                        <Button variant={"theme"} href={`/some-people`} className="btn-block my-3">People</Button>
                    </Card.Footer>
                </Card>
            </Container>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="width80 bg-transparent">
                <Modal.Header className="rounded">
                    <p onClick={handleClose} className="link-theme"><strong>Done</strong></p>
                </Modal.Header>
                <Modal.Body className="bg-transparent">
                    <Results input={value.current}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

function Results({input}) {
    let quoteList, listOrder=[];

    let {loading, data} = useQuery(QUERY_QUOTE_RESULT, {
        variables: {input: input},
    })

    if(loading) return <p>Loading...</p>

    quoteList = data.quoteResult;

    for(let n = 0; n < quoteList.length; ++n) {
        listOrder.push(n);
    }

    return (quoteList[0] ?
        <Container className="mb-2">
            <div>
                <Row className="text-center">
                    {quoteList.map((index) => (
                        <Col xs={12} md={6} xl={4} className="mb-3" key={index.name + index.quoteText}>
                            <QuoteCard quotes={quoteList} quoteIndex={quoteList.indexOf(index)} indexOrder={listOrder}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
        :
        <Container>
            <h5>No results under quotes...</h5>
        </Container>    
    )
}

export default Home