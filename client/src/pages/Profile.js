import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth"
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";
import BookmarkedQuotes from "../components/ProfileWidgets";

import { QUERY_ACCOUNT_ME } from "../utils/queries";

function Profile () {
    let { loading, data } = useQuery(QUERY_ACCOUNT_ME);

    if(loading) return <div>Loading...</div>

    if(!data) return <Redirect to={`/`}/>

    const myAccount = data.me;
    
    return(
        <Container>
            <MetaTags>
                <title>1001 Nuggets - My Profile</title>
            </MetaTags>
            <Card>
                <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} My Profile</Card.Header>
                <Card.Body>
                    <Row>
                        <Col><BookmarkedQuotes input={myAccount.bookmarkedQuotes}/></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Profile;