import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";

import TopicButton from "../components/TopicButton";

import { QUERY_AUTHOR_ID } from "../utils/queries";

function Author () {
    const { authorId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_ID, {
        variables: {authorId: authorId },
    });

    if(!authorId || authorId === null || authorId === "undefined") return (<Redirect to={`/authors`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const author = data.authorID;

    console.log(author);

    return (        
        <Container>
            <MetaTags>
                <title>1001 Nuggets - {author.name}</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/authors`}>Authors</Link> {`>`} {author.name}</Card.Header>
                <Card.Body>
                    <p>Quotes by {author.name}</p>
                    <Row>
                        {author.quotes.map((index) => (
                            <Col xs={12} sm={6} md={4} key={index.quoteText} className="mb-3">
                                <Card>
                                    <Link to={`/quote/${index._id}`} className="text-black">
                                        <Card.Body>
                                            <Card.Text>
                                                "{index.quoteText}"
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                    {index.topics.length > 0 && 
                                        <Card.Footer className="text-center">
                                            {index.topics.map((topic) => (
                                                <TopicButton name={topic} key={index.quoteText + topic}/>
                                            ))}
                                        </Card.Footer>
                                    }
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Author;