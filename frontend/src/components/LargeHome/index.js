import React, {useRef, useState} from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

const QuoteOfTheDay = React.lazy(() => import("../QuoteOfTheDay"));

function LargeHome(){
    const [buttonDisabled, setAbility] = useState(true);
    const value = useRef('');

    const handleChange = () => {
        let searchBar = document.getElementById("homeSearchLarge");
        value.current = searchBar.value;
        if(value.current) setAbility(false);
        else setAbility(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/search/" + value.current;
    }

    return(
        <Container id="homeBodyLarge" className="text-white">
            <h1 className="mt-5">1001 NUGGETS</h1>
            <span id="homeSubtext">EVERYTHING • EVERYONE • EVERYWHERE</span>
            <Form className="px-4 mt-5 mb-4 row align-items-center" onSubmit={handleSubmit}>
                <Col xs={11}><input placeholder="Search..." id="homeSearchLarge" className="rounded width100 text-center py-2" onChange={handleChange}/></Col>
                <Col xs={1}><Button variant={"theme"} type="submit" disabled={buttonDisabled} aria-label="search" readOnly><FaSearch/></Button></Col>
            </Form>
            <Row>
                <Col xs={4}>
                    <Card className="my-4">
                        <Card.Body>
                            {/* <Form className="row">
                                <Col xs={10}><input placeholder="Search..." className="rounded width100 text-center py-2"/></Col>
                                <Col xs={2}><Button><FaSearch/></Button></Col>
                            </Form> */}
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everything`}>Everything</Button></div>
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everyone`}>Everyone</Button></div>
                            <div><Button variant={"theme"} className="btn-block py-2 my-2" href={`/everywhere`}>Everywhere</Button></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={8}>
                    <QuoteOfTheDay/>
                </Col>
            </Row>
        </Container>
    )
}

export default LargeHome;