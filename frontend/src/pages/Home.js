import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Card, Container, Form, Button } from "react-bootstrap"

function Home () {    
    const value = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("searchHome");
        value.current = searchBar.value;
    }

    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="text-center">
                <Card className="border-none">
                    <Card.Header className="bg-theme">
                        <h1 className="font-victor-libre text-white">1001 NUGGETS</h1>
                    </Card.Header>
                    <Card.Body className="px-5">
                        <Form onSubmit={() => navigate('search/' + value.current)}>
                            <input type="text" placeholder="Search 1001 Nuggets quotes..." id="searchHome" className="formInput rounded text-center" onChange={handleChange}></input>
                        </Form>
                    </Card.Body>
                    <Card.Footer className="px-5">
                        <Button variant={"theme"} href={`/topics`} className="btn-block my-3">Topics</Button>
                        <Button variant={"theme"} href={`/collections`} className="btn-block my-3">Collections</Button>
                        <Button variant={"theme"} href={`/some-people`} className="btn-block my-3">People</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default Home