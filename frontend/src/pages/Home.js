import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import { FaSearch } from "react-icons/fa";

const QuoteOfTheDay = React.lazy(() => import("../components/QuoteOfTheDay"))

function Home () {  
    const [buttonDisabled, setAbility] = useState(true)
    const value = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("homeSearch");
        value.current = searchBar.value;
        if(value.current) setAbility(false);
        else setAbility(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/search/" + value.current;
    }
    
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="text-center">
                <div className="d-none d-sm-block">
                    <QuoteOfTheDay/>
                </div>
                <div id="homeBody" className="text-white d-xs-block d-sm-none">
                    <h1 className="mb-3">1001 Nuggets</h1>
                    <span>Everything • Everyone • Everywhere</span>
                    <Form className="row mx-3 mt-5 align-items-center" onSubmit={handleSubmit}>
                        <Col className="p-0" xs={10}><input type="text" id="homeSearch" placeholder="Search Nuggets..." className="rounded width100 text-center py-2" onChange={handleChange}/></Col>
                        <Col className="p-0" xs={2}><Button variant={"theme"} type="submit" disabled={buttonDisabled} readOnly><FaSearch/></Button></Col>
                    </Form>
                    <Row className="align-items-center text-center my-4 mx-1">
                        <Col className="break-line"/>
                        <Col className="p-0" xs={1}>OR</Col>
                        <Col className="break-line"/>
                    </Row>
                    <Button variant={"theme"} className="py-3 px-5">Find Nuggets</Button>
                </div>
            </Container>
        </div>
    )
}

export default Home