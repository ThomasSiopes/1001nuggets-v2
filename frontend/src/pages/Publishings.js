import React from "react";
import { Helmet } from "react-helmet";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Publishings() {
    return(
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - Publishings</title>
            </Helmet>
            <Card>
                <Card.Body>
                    <Row>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 1</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 2</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 3</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 4</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 5</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 6</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Lite</Button>
                        </Col>
                        <Col className="my-2" xs={6} sm={4}>
                            <Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Scrapbook</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Publishings;