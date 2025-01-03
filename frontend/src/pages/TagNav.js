import React from "react";
import {Helmet} from "react-helmet";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card } from "react-bootstrap";
import AuthorButton from "../components/AuthorButton";

import { QUERY_TAG_ALL } from "../utils/queries";

const Installation = (inputObj) => {
    const input = inputObj.inputObj;
    
    return(
        <p>
            <hr/>
            <strong>{input.tag}</strong>
            <hr/>
            {input.authors.map((index) => (
                <div>
                    <AuthorButton key={index} type={"link"} name={index}/>
                </div>
            ))}
        </p>
    );
}

function Tags() {
    let {loading, data} = useQuery(QUERY_TAG_ALL);
    if(loading) return <span>Loading...</span>;
    if(!data) return <span>...</span>;

    const tagData = data.tags;

    return (
        <Container>
            <Helmet>
                <title>1001 Nuggets - Authors</title>
            </Helmet>
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        <Card.Body className="text-center">
                            <Row>
                                {tagData.map((index) => (
                                    <div>
                                        <Installation key={index} inputObj={index}/>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Tags;