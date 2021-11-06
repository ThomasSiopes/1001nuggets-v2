import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import { QUERY_AUTHOR_ALL, QUERY_TOPIC_ALL } from '../../utils/queries';

const Results = ({type, input}) => {
    let authList, topList, newList = [];

    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    authList = data;

    ({loading, data} = useQuery(QUERY_TOPIC_ALL));
    topList = data;

    if(loading) return <p>Loading...</p>

    input = input.toUpperCase();

    if(type === "author") {
        for(let index of authList.authors) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    } else if(type === "topic") {
        for(let index of topList.topics) {
            if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
        }
    }

    if(newList[0]) {
        return (
            <Container className="mb-2">
                <div>
                    <h5>Results under {type}s . . .</h5>
                    <hr></hr>
                    <Row className="text-center">
                        {newList.map((index) => (
                            <Col xs={12} sm={6} lg={4} xl={3} className="mb-2" key={index.name}>
                                <Card>
                                    <Link to={`/author/${index._id}`} className="btn btn-theme">
                                            <Card.Body>
                                                {index.name}
                                            </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h5>No results under {type}s . . .</h5>
            <hr></hr>
        </Container>
    )
}

export default Results;
