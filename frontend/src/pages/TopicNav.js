import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async"

import { Container, Row, Col, Card } from "react-bootstrap";
const TopicNavInst = React.lazy(() => import("../components/TopicNavInst"));

function Topics () {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const scrollToLetter = (letter) => {
        document.getElementById(letter)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HelmetProvider>
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - Topics</title>
            </Helmet>
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                {alphabet.map((index) => (
                                    <TopicNavInst key={index} letter={index}/>
                                ))
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-2 ms-0 align-items-center justify-content-center">
                        {alphabet.map((fitterIndex) => (
                            <div className="p-0 mx-0 float-left sidebar-text" key={"fitter" + fitterIndex}>
                                <span role="button" onClick={() => scrollToLetter(fitterIndex)} className="text-white" style={{cursor:'pointer'}}>{fitterIndex}</span>
                            </div>
                        ))
                        }
                    </Row>
                </div>
            </Row>
        </Container>
        </HelmetProvider>
    )
}

export default Topics;