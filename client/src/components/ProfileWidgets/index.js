import React from "react";
// import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";

const BookmarkedQuotes = ({input}) => {
    console.log(input)
    if(!input) return <p>Loading...</p>

    return (
        <Container>
            <h4>Bookmarked Quotes</h4>
            <Row>
                {input.map((index) => (
                   <Col xs={3} className="mb-2">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    {index.quoteText}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> 
                ))}
            </Row>
        </Container>
    )
}

export default BookmarkedQuotes;