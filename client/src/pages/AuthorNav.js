import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../utils/queries";

function Freethinkers () {
    let { loading, data } = useQuery(QUERY_AUTHOR_ALL);

    if(loading) return <span>Loading...</span>

    let authorList = [];

    for(let index of data.authors){
        authorList.push(index);
    }

    authorList = authorList.sort((a, b) => a.lastName.localeCompare(b.lastName));

    const searchFunction = () => {
        let input, filter, group, elements, body, textValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByClassName("col-12")

        for(let i = 0; i < elements.length; ++i) {
            body = elements[i].getElementsByTagName("a")[0];
            textValue = body.textContent || body.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display="";
            else elements[i].style.display="none";
        }
    }

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets - Authors</title>
            </MetaTags>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Authors</Card.Header>
                        <Card.Header className="text-center py-3">
                            <Card.Title>Authors</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col><input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for author names..." className="mb-3"/></Col>
                                <Col className="d-none d-lg-block">
                                    <span>
                                        <a className="me-2" href="#A">A</a>
                                        <a className="me-2" href="#B">B</a>
                                        <a className="me-2" href="#C">C</a>
                                        <a className="me-2" href="#D">D</a>
                                        <a className="me-2" href="#E">E</a>
                                        <a className="me-2" href="#F">F</a>
                                        <a className="me-2" href="#G">G</a>
                                        <a className="me-2" href="#H">H</a>
                                        <a className="me-2" href="#I">I</a>
                                        <a className="me-2" href="#J">J</a>
                                        <a className="me-2" href="#K">K</a>
                                        <a className="me-2" href="#L">L</a>
                                        <a className="me-2" href="#M">M</a>
                                        <a className="me-2" href="#N">N</a>
                                        <a className="me-2" href="#O">O</a>
                                        <a className="me-2" href="#P">P</a>
                                        <a className="me-2" href="#Q">Q</a>
                                        <a className="me-2" href="#R">R</a>
                                        <a className="me-2" href="#S">S</a>
                                        <a className="me-2" href="#T">T</a>
                                        <a className="me-2" href="#U">U</a>
                                        <a className="me-2" href="#V">V</a>
                                        <a className="me-2" href="#W">W</a>
                                        <a className="me-2" href="#X">X</a>
                                        <a className="me-2" href="#Y">Y</a>
                                        <a className="me-2" href="#Z">Z</a>
                                    </span>
                                </Col>
                            </Row>
                            <Row id="myGroup">
                                {authorList.map((index) => (
                                    <Col xs={12} sm={6} md={4} lg={3} key={index.name} className="text-center mb-2">
                                        <p>
                                            <span><strong><Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link></strong></span>
                                            <span className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</span>
                                        </p>
                                        <hr className="d-block d-sm-none"/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} className="d-block d-lg-none">
                    <Container>
                        <p className="mb-1"><a href="#A">A</a></p>
                        <p className="mb-1"><a href="#B">B</a></p>
                        <p className="mb-1"><a href="#C">C</a></p>
                        <p className="mb-1"><a href="#D">D</a></p>
                        <p className="mb-1"><a href="#E">E</a></p>
                        <p className="mb-1"><a href="#F">F</a></p>
                        <p className="mb-1"><a href="#G">G</a></p>
                        <p className="mb-1"><a href="#H">H</a></p>
                        <p className="mb-1"><a href="#I">I</a></p>
                        <p className="mb-1"><a href="#J">J</a></p>
                        <p className="mb-1"><a href="#K">K</a></p>
                        <p className="mb-1"><a href="#L">L</a></p>
                        <p className="mb-1"><a href="#M">M</a></p>
                        <p className="mb-1"><a href="#N">N</a></p>
                        <p className="mb-1"><a href="#O">O</a></p>
                        <p className="mb-1"><a href="#P">P</a></p>
                        <p className="mb-1"><a href="#Q">Q</a></p>
                        <p className="mb-1"><a href="#R">R</a></p>
                        <p className="mb-1"><a href="#S">S</a></p>
                        <p className="mb-1"><a href="#T">T</a></p>
                        <p className="mb-1"><a href="#U">U</a></p>
                        <p className="mb-1"><a href="#V">V</a></p>
                        <p className="mb-1"><a href="#W">W</a></p>
                        <p className="mb-1"><a href="#X">X</a></p>
                        <p className="mb-1"><a href="#Y">Y</a></p>
                        <p className="mb-1"><a href="#Z">Z</a></p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Freethinkers;