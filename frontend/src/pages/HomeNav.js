import React from "react";
import { Helmet } from "react-helmet";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function HomeNav() {
    return(
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - More Nuggets</title>
            </Helmet>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Button variant={"theme"} href={`/topics`} className="btn-block my-3">Topics</Button>
                            <Button variant={"theme"} href={`/collections`} className="btn-block my-3">Collections</Button>
                            {/* <Button variant={"theme"} href={`/authors`} className="btn-block my-3">Authors</Button> */}
                            <Button variant={"theme"} href={`/publishings`} className="btn-block my-3">Publishings</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomeNav;