import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

import HomePagePopularWidget from "../HomePagePopularWidget";
import HomePageCatalogueWidget from "../HomePageCatalogueWidget";
const QuoteOfTheDay = React.lazy(() => import("../QuoteOfTheDay"));

function LargeHome(){
    const [buttonDisabled, setAbility] = useState(true);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAbility(e.target.value.length <= 3);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const term = inputRef.current?.value?.trim();
        if(term && !buttonDisabled) navigate(`/search/${term}`);
    }

    return(
        <Container id="homeBodyLarge" className="text-white">
            <h1 className="pt-5">1001 NUGGETS</h1>
            <span id="homeSubtext">EVERYTHING • EVERYONE • EVERYWHERE</span>
            <Form className="px-4 mt-5 mb-4 row align-items-center" onSubmit={handleSubmit}>
                <Col xs={11}>
                    <input ref={inputRef} placeholder="Search..." id="homeSearchLarge" className="rounded width100 text-center py-2" onChange={handleChange}/>
                </Col>
                <Col xs={1}>
                    <Button variant={"theme"} type="submit" disabled={buttonDisabled} aria-label="search" readOnly>
                        <FaSearch/>
                    </Button>
                </Col>
            </Form>
            <Row className="mb-3">
                <Col xs={4}>
                    <Card className="my-4">
                        <Card.Body>
                            {/* <Form className="row">
                                <Col xs={10}><input placeholder="Search..." className="rounded width100 text-center py-2"/></Col>
                                <Col xs={2}><Button><FaSearch/></Button></Col>
                            </Form> */}
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/topics`}>Topics</Button></div>
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/collections`}>Collections</Button></div>
                            {/* <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everything`}>Everything</Button></div> */}
                            {/* <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everyone`}>Everyone</Button></div> */}
                            {/* <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everywhere`}>Everywhere</Button></div> */}
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/glossary`}>Glossary</Button></div>
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/publications`}>Publications</Button></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={8}>
                    <QuoteOfTheDay/>
                </Col>
                <Col xs={9}>
                    <HomePagePopularWidget/>
                </Col>
                <Col>
                    <HomePageCatalogueWidget/>
                </Col>
            </Row>
        </Container>
    )
}

export default LargeHome;