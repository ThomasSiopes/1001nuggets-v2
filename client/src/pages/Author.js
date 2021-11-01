import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import TopicButton from "../components/TopicButton";

import { QUERY_AUTHOR_ID } from "../utils/queries";

function Author () {
    const { authorId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_ID, {
        variables: {authorId: authorId },
    });

    if(!authorId || authorId === null || authorId === "undefined") return (<Redirect to={`/`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const author = data.authorID;

    console.log(author);

    let picPath = "/assets/images/portraits/" + author.thumbnail + ".png";

    return (        
        <Container className="text-white">
            <MetaTags>
                <title>Undoctrination - {author.name}</title>
            </MetaTags>
            <Row>
                {/* Author Portrait Section */}
                <Col xs={12} lg={3} className="order-1 order-lg-2 mb-3">
                    <Card bg={"theme"}>
                        <Row className="align-items-center">
                            {author.thumbnail != null &&
                                <Col xs={5} lg={12}>
                                    <img className="card-img" src={picPath} alt="Portrait"/>
                                </Col>
                            }
                            <Col xs={7} lg={12} className="text-center">
                                <h5 className="card-title mt-2">{author.name}</h5>
                                {author.description != null &&
                                    <p className="card-text mx-2">{author.description}</p>
                                }
                            </Col>
                        </Row>
                            <Container className="mb-2">
                            {(author.links.length > 0) &&
                                <div>
                                    <hr className="my-3"/>
                                    <Row className="text-center">
                                        {author.links.map((index) => (
                                            <Col xs={4} lg={12} className="mb-2" key={index.type}>
                                                {(index.type === "Facebook" || index.type === "FaceBook") &&
                                                    <Button variant={"theme"} className="btn-block" href={index.link}><FaFacebook/></Button>    
                                                }
                                                {(index.type === "Twitter") &&
                                                    <Button variant={"theme"} className="btn-block" href={index.link}><FaTwitter/></Button>
                                                }
                                                {(index.type === "Instagram" || index.type === "InstaGram") &&
                                                    <Button variant={"theme"} className="btn-block" href={index.link}><FaInstagram/></Button>
                                                }
                                                {(index.type === "Youtube" || index.type === "YouTube") &&
                                                    <Button variant={"theme"} className="btn-block" href={index.link}><FaYoutube/></Button>
                                                }
                                                {(index.type !== "Facebook" && index.type !== "FaceBook" && index.type !== "Twitter" && index.type !== "Instagram" && index.type !== "InstaGram" && index.type !== "Youtube" && index.type !== "YouTube") &&
                                                    <Button variant={"theme"} className="btn-block smaller-text" href={index.link}>{index.type}</Button>
                                                }
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            }
                            </Container>
                    </Card>
                </Col>

                {/* Quote Section */}
                <Col xs={12} lg={9} className="order-2 order-lg-1">
                    <Row className="text-center">
                        <Col xs={12}>
                            <p className="bg-theme rounded py-1"><strong>Quotes by {author.name}</strong></p>
                        </Col>
                        {author.quotes.map((index) => (
                            <Col xs={12} className="mb-3" key={index.quoteText}>
                                <Card className="bg-theme">
                                    <Link to={`/quote/${index._id}`}><Button variant={"theme"} className="btn-block">
                                        <Container>
                                            <Card.Body className="quote-preview">
                                                "{index.quoteText}"
                                            </Card.Body>
                                        </Container>
                                    </Button></Link>
                                    {(index.topics.length > 0) &&
                                        <Card.Footer>
                                            {index.topics.map((topic) => (
                                                <TopicButton key={index+topic} name={topic}/>
                                            ))}
                                        </Card.Footer>
                                    }
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Author;