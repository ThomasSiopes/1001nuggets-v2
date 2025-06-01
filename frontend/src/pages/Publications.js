import React from "react";
import { Helmet } from "react-helmet";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import icon1 from "../assets/images/bookpics/book1.png";
import icon2 from "../assets/images/bookpics/book2.png";
import icon3 from "../assets/images/bookpics/book3.png";
import icon4 from "../assets/images/bookpics/book4.png";
import icon5 from "../assets/images/bookpics/book5.png";
import icon6 from "../assets/images/bookpics/book6.png";
import iconLite from "../assets/images/bookpics/bookLite.png";
import iconSB from "../assets/images/bookpics/bookSB.png";

function Publications() {
    return(
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - Publications</title>
            </Helmet>
            <Card>
                <Card.Body>
                    <Row className="text-center">
                        {/* <Col className="my-2" xs={6} sm={4}>
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
                        </Col> */}
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon1}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 1</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon2}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 2</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon3}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 3</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon4}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 4</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon5}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 5</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={icon6}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 6</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={iconLite}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Lite</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com"><Card.Img variant="top" src={iconSB}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Scrapbook</Button></Card.Body>
                        </Card></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Publications;