import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../utils/queries";

function Freethinkers () {
    let { loading, data } = useQuery(QUERY_AUTHOR_ALL);

    if(loading) return <span>Loading...</span>

    let authorList = data.authors.map((item) => 
        Object.assign({}, item, {selected:false})
    )

    authorList = authorList.sort((a, b) => a.lastName.localeCompare(b.lastName));

    for(let n = 0; n < authorList.length; ++n) {
        authorList[n].firstLetter = false;
        if(n===0) {
            authorList[n].firstLetter = true;
        } else {
            if(authorList[n].lastName.charAt(0) !== authorList[n-1].lastName.charAt(0)) {
                authorList[n].firstLetter = true;
            }
        }
    }

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
            <Row className="justify-content-center navPage-body">
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
                                    <Col xs={12} key={index.name} className="text-center mb-2">
                                        {index.firstLetter &&
                                            <p id={index.lastName.charAt(0)}>{index.lastName.charAt(0)}</p>
                                        }
                                        <p>
                                            <span><strong><Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link></strong></span>
                                            <span className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</span>
                                        </p>
                                        <hr/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} className="d-block d-lg-none p-0 text-center">
                    <div className="fitter py-2 px-1">
                        <p className="mb-1"><a href="#A" className="text-white">A</a></p>
                        <p className="mb-1"><a href="#B" className="text-white">B</a></p>
                        <p className="mb-1"><a href="#C" className="text-white">C</a></p>
                        <p className="mb-1"><a href="#D" className="text-white">D</a></p>
                        <p className="mb-1"><a href="#E" className="text-white">E</a></p>
                        <p className="mb-1"><a href="#F" className="text-white">F</a></p>
                        <p className="mb-1"><a href="#G" className="text-white">G</a></p>
                        <p className="mb-1"><a href="#H" className="text-white">H</a></p>
                        <p className="mb-1"><a href="#I" className="text-white">I</a></p>
                        <p className="mb-1"><a href="#J" className="text-white">J</a></p>
                        <p className="mb-1"><a href="#K" className="text-white">K</a></p>
                        <p className="mb-1"><a href="#L" className="text-white">L</a></p>
                        <p className="mb-1"><a href="#M" className="text-white">M</a></p>
                        <p className="mb-1"><a href="#N" className="text-white">N</a></p>
                        <p className="mb-1"><a href="#O" className="text-white">O</a></p>
                        <p className="mb-1"><a href="#P" className="text-white">P</a></p>
                        <p className="mb-1"><a href="#Q" className="text-white">Q</a></p>
                        <p className="mb-1"><a href="#R" className="text-white">R</a></p>
                        <p className="mb-1"><a href="#S" className="text-white">S</a></p>
                        <p className="mb-1"><a href="#T" className="text-white">T</a></p>
                        <p className="mb-1"><a href="#U" className="text-white">U</a></p>
                        <p className="mb-1"><a href="#V" className="text-white">V</a></p>
                        <p className="mb-1"><a href="#W" className="text-white">W</a></p>
                        <p className="mb-1"><a href="#X" className="text-white">X</a></p>
                        <p className="mb-1"><a href="#Y" className="text-white">Y</a></p>
                        <p className="mb-1"><a href="#Z" className="text-white">Z</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Freethinkers;