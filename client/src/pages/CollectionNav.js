import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import { QUERY_COLLECTION_ALL } from "../utils/queries";

function Collections () {
    let { loading, data } = useQuery(QUERY_COLLECTION_ALL);

    if(loading) return <span>Loading...</span>

    let collectionList = data.collections.map((item) => 
        Object.assign({}, item, {selected:false})
    )

    if(!collectionList || !collectionList[0]) return <span>Error</span>

    collectionList = collectionList.sort((a, b) => a.sortedName.localeCompare(b.sortedName));

    for(let n = 0; n < collectionList.length; ++n) {
        collectionList[n].firstLetter = false;
        if(n===0) {
            collectionList[n].firstLetter = true;
        } else {
            if(collectionList[n].sortedName.charAt(0) !== collectionList[n-1].sortedName.charAt(0)) {
                collectionList[n].firstLetter = true;
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
                <title>1001 Nuggets - Collections</title>
            </MetaTags>
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        {/* <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Collections</Card.Header> */}
                        <Card.Body>
                            <Row className="d-none d-md-block">
                                <Col><input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for collection names..." className="mb-3"/></Col>
                            </Row>
                            <Row id="myGroup">
                                {collectionList.map((index) => (
                                    <Col xs={12} key={index.name} className="text-center mb-2">
                                        {index.firstLetter &&
                                            <div>
                                                <strong><p id={index.sortedName.charAt(0)}>{index.sortedName.charAt(0)}</p></strong>
                                                <hr/>
                                            </div>
                                        }
                                        <p><strong><Link to={`/collection/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                                        <p className="subtext"> {`(`} {index.quotes.length} {index.quotes.length === 1 ? "quote" : "quotes"} {`)`}</p>
                                        <hr/>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <div className="fitter py-2 px-1">
                        <p className="my-0"><a href="#A" className="sidebar-text text-white">A</a></p>
                        <p className="my-0"><a href="#B" className="sidebar-text text-white">B</a></p>
                        <p className="my-0"><a href="#C" className="sidebar-text text-white">C</a></p>
                        <p className="my-0"><a href="#D" className="sidebar-text text-white">D</a></p>
                        <p className="my-0"><a href="#E" className="sidebar-text text-white">E</a></p>
                        <p className="my-0"><a href="#F" className="sidebar-text text-white">F</a></p>
                        <p className="my-0"><a href="#G" className="sidebar-text text-white">G</a></p>
                        <p className="my-0"><a href="#H" className="sidebar-text text-white">H</a></p>
                        <p className="my-0"><a href="#I" className="sidebar-text text-white">I</a></p>
                        <p className="my-0"><a href="#J" className="sidebar-text text-white">J</a></p>
                        <p className="my-0"><a href="#K" className="sidebar-text text-white">K</a></p>
                        <p className="my-0"><a href="#L" className="sidebar-text text-white">L</a></p>
                        <p className="my-0"><a href="#M" className="sidebar-text text-white">M</a></p>
                        <p className="my-0"><a href="#N" className="sidebar-text text-white">N</a></p>
                        <p className="my-0"><a href="#O" className="sidebar-text text-white">O</a></p>
                        <p className="my-0"><a href="#P" className="sidebar-text text-white">P</a></p>
                        <p className="my-0"><a href="#Q" className="sidebar-text text-white">Q</a></p>
                        <p className="my-0"><a href="#R" className="sidebar-text text-white">R</a></p>
                        <p className="my-0"><a href="#S" className="sidebar-text text-white">S</a></p>
                        <p className="my-0"><a href="#T" className="sidebar-text text-white">T</a></p>
                        <p className="my-0"><a href="#U" className="sidebar-text text-white">U</a></p>
                        <p className="my-0"><a href="#V" className="sidebar-text text-white">V</a></p>
                        <p className="my-0"><a href="#W" className="sidebar-text text-white">W</a></p>
                        <p className="my-0"><a href="#X" className="sidebar-text text-white">X</a></p>
                        <p className="my-0"><a href="#Y" className="sidebar-text text-white">Y</a></p>
                        <p className="my-0"><a href="#Z" className="sidebar-text text-white">Z</a></p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Collections;