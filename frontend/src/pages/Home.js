import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap"

function Home () {    
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="px-5">
                <Form>
                    <input type="submit" className="btn btn-theme"/>
                    <input type="text" placeholder="Search 1001 Nuggets quotes..." className="formInput rounded text-center"></input>
                </Form>
            </Container>
        </div>
    )
}

export default Home