import React from "react";
import { Helmet } from "react-helmet";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import icon1 from "../assets/images/bookpics/book1.webp";
import icon2 from "../assets/images/bookpics/book2.webp";
import icon3 from "../assets/images/bookpics/book3.webp";
import icon4 from "../assets/images/bookpics/book4.webp";
import icon5 from "../assets/images/bookpics/book5.webp";
import icon6 from "../assets/images/bookpics/book6.webp";
import iconLite from "../assets/images/bookpics/bookLite.webp";
import iconSB from "../assets/images/bookpics/bookSB.webp";

function Publications() {
    return(
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - Publications</title>
            </Helmet>
            <Card>
                <Card.Body>
                    <Row className="text-center">
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 1"><Card.Img alt="Book Icon 1" variant="top" src={icon1}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 1</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 2"><Card.Img alt="Book Icon 2" variant="top" src={icon2}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 2</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 3"><Card.Img alt="Book Icon 3" variant="top" src={icon3}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 3</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 4"><Card.Img alt="Book Icon 4" variant="top" src={icon4}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 4</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 5"><Card.Img alt="Book Icon 5" variant="top" src={icon5}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 5</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book 6"><Card.Img alt="Book Icon 6" variant="top" src={icon6}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Book 6</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for book lite"><Card.Img alt="Book Icon Lite" variant="top" src={iconLite}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Lite</Button></Card.Body>
                        </Card></Col>
                        <Col xs={12} sm={6} className="my-2"><Card>
                                <a href="https://www.google.com" aria-label="Shop for scrapbook"><Card.Img alt="Book Icon Scrapbook" variant="top" src={iconSB}/></a>
                                <Card.Body><Button className="btn-block" href={"https://www.google.com"} variant={"theme"}>1001 Nuggets: Scrapbook</Button></Card.Body>
                        </Card></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Publications;