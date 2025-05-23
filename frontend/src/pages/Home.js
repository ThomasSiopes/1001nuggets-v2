import React from "react";
import { Helmet } from "react-helmet";
import { Container, Col, Form, Button } from "react-bootstrap"

import { FaSearch } from "react-icons/fa";

// const QuoteOfTheDay = React.lazy(() => import("../components/QuoteOfTheDay"))

function Home () {    
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="text-center">
                {/* <QuoteOfTheDay/> */}
                <div id="homeBody" className="text-white">
                    <h1 className="mb-3">1001 Nuggets</h1>
                    <span>Everything. Everyone. Everywhere.</span>
                    <Form className="row mx-3 mt-5 align-items-center">
                        <Col xs={10}><input type="text" id="homeSearch" placeholder="Search..." className="rounded width100 text-center"/></Col>
                        <Col xs={2}><Button variant={"theme"} type="submit" readOnly><FaSearch/></Button></Col>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Home