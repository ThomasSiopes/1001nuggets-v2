import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_TOPIC_ALL } from "../utils/queries";

function Topics () {
    let { loading, data } = useQuery(QUERY_TOPIC_ALL);

    if(loading) return <span>Loading...</span>

    let topicList = data.topics.map((item) => 
        Object.assign({}, item, {selected:false})
    )

    if(!topicList || !topicList[0]) return <span>Error</span>

    topicList = topicList.sort((a, b) => a.sortedName.localeCompare(b.sortedName));

    for(let n = 0; n < topicList.length; ++n) {
        topicList[n].firstLetter = false;
        if(n===0) {
            topicList[n].firstLetter = true;
        } else {
            if(topicList[n].sortedName.charAt(0) !== topicList[n-1].sortedName.charAt(0)) {
                topicList[n].firstLetter = true;
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
                <title>1001 Nuggets - Topics</title>
            </MetaTags>
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        {/* <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Topics</Card.Header> */}
                        <Card.Body>
                            <Row className="d-none d-md-block">
                                <Col><input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for topic names..." className="mb-3"/></Col>
                            </Row>
                            <Row id="myGroup">
                                {topicList.map((index) => (
                                    <Col xs={12} key={index.name} className="text-center mb-2">
                                        {index.firstLetter &&
                                            <div>
                                                <strong><p id={index.sortedName.charAt(0)}>{index.sortedName.charAt(0)}</p></strong>
                                                <hr/>
                                            </div>
                                        }
                                        <p><strong><Link to={`/topic/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                                        <p className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</p>
                                        <hr/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-3 ms-0 align-items-center justify-content-center">
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#A" className="text-white">A</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#B" className="text-white">B</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#C" className="text-white">C</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#D" className="text-white">D</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#E" className="text-white">E</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#F" className="text-white">F</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#G" className="text-white">G</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#H" className="text-white">H</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#I" className="text-white">I</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#J" className="text-white">J</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#K" className="text-white">K</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#L" className="text-white">L</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#M" className="text-white">M</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#N" className="text-white">N</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#O" className="text-white">O</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#P" className="text-white">P</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Q" className="text-white">Q</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#R" className="text-white">R</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#S" className="text-white">S</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#T" className="text-white">T</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#U" className="text-white">U</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#V" className="text-white">V</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#W" className="text-white">W</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#X" className="text-white">X</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Y" className="text-white">Y</a></div>
                        <div className="p-0 mx-0 float-left sidebar-text"><a href="#Z" className="text-white">Z</a></div>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Topics;