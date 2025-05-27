import React from "react";
import {Helmet} from "react-helmet"

import { Container, Row, Col, Card } from "react-bootstrap";
const TopicNavInst = React.lazy(() => import("../components/TopicNavInst"));

function Topics () {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    return (
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
                            <div className="p-0 mx-0 float-left sidebar-text" key={"fitter" + fitterIndex}><a href={"#" + fitterIndex} className="text-white">{fitterIndex}</a></div>
                        ))
                        }
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Topics;