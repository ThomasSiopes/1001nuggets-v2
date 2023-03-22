import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../utils/queries";

function Authors () {
    let { loading, data } = useQuery(QUERY_AUTHOR_ALL);

    if(loading) return <span>Loading...</span>

    let authorList = data.authors.map((item) => 
        Object.assign({}, item, {selected:false})
    )

    if(!authorList || !authorList[0]) return <span>Error</span>

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
                <Col className="pe-0">
                    <Card>
                        {/* <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Authors</Card.Header> */}
                        <Card.Body>
                            <Row className="d-none d-md-block">
                                <Col><input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for author names..." className="mb-3"/></Col>
                            </Row>
                            <Row id="myGroup">
                                {authorList.map((index) => (
                                    <Col xs={12} key={index.name} className="text-center mb-2">
                                        {index.firstLetter &&
                                            <div>
                                                <strong><p id={index.lastName.charAt(0)}>{index.lastName.charAt(0)}</p></strong>
                                                <hr/>
                                            </div>
                                        }
                                        <p><strong><Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                                        <p className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</p>
                                        <hr/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-2 mx-2 align-items-center justify-content-center">
                        <Col xs={7} className="p-0 mx-0"><a href="#A" className="sidebar-text text-white">A</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#B" className="sidebar-text text-white">B</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#C" className="sidebar-text text-white">C</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#D" className="sidebar-text text-white">D</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#E" className="sidebar-text text-white">E</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#F" className="sidebar-text text-white">F</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#G" className="sidebar-text text-white">G</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#H" className="sidebar-text text-white">H</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#I" className="sidebar-text text-white">I</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#J" className="sidebar-text text-white">J</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#K" className="sidebar-text text-white">K</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#L" className="sidebar-text text-white">L</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#M" className="sidebar-text text-white">M</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#N" className="sidebar-text text-white">N</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#O" className="sidebar-text text-white">O</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#P" className="sidebar-text text-white">P</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#Q" className="sidebar-text text-white">Q</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#R" className="sidebar-text text-white">R</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#S" className="sidebar-text text-white">S</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#T" className="sidebar-text text-white">T</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#U" className="sidebar-text text-white">U</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#V" className="sidebar-text text-white">V</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#W" className="sidebar-text text-white">W</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#X" className="sidebar-text text-white">X</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#Y" className="sidebar-text text-white">Y</a></Col>
                        <Col xs={7} className="p-0 mx-0"><a href="#Z" className="sidebar-text text-white">Z</a></Col>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Authors;