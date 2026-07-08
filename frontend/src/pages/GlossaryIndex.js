import React from "react";
// import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_GLOSSARY_TYPING } from "../utils/queries";

import { Container, Card } from "react-bootstrap";

function GlossaryIndex () {
    const { typing } = useParams();

    const {loading, data} = useQuery(QUERY_GLOSSARY_TYPING, { variables: { typing: typing }, fetchPolicy: "network-only" });

    if(!typing) return <Navigate to={"/404error"} replace/>

    if(!loading && (!data || !data.glossaryType)) return <Navigate to={"/404error"} replace/>

    const glossaryIndex = data?.glossaryType;

    let prefix = null;

    switch(typing){
        case "topics": prefix="topic"; break
        case "collections": prefix="collection"; break
        case "everything": prefix="thing"; break
        case "everyone": prefix="person"; break
        case "everywhere": prefix="place"; break
        default: prefix="topic";
    }

    const typingCap = String(typing).charAt(0).toUpperCase() + String(typing).slice(1);

    return (
        <>
        {/* <LoadingOverlay show={loading && !data} /> */}
        {glossaryIndex && <HelmetProvider>
            <Container className="pt-3 mb-4">
                <Helmet>
                    <title>1001 Nuggets - Glossary - {typingCap}</title>
                </Helmet>
                <Card>
                    <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/glossary`}>Glossary</Link> {`>`} {typingCap}</Card.Header>
                    <Card.Header className="py-3 justify-content-center text-center">
                        <h1>{typingCap}</h1>
                    </Card.Header>
                    <Card.Body>
                        {glossaryIndex.content.map((index) => (
                            <div key={index.index}>
                                <p><strong><Link to={"/" + prefix + "/" +  index.realID} className="link-theme">{index.index}</Link></strong> - {index.definition}</p>
                                {/* <p><strong>{index.index}</strong> - {index.definition}</p> */}
                                <hr/>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </HelmetProvider>}
        </>
    )
}

export default GlossaryIndex;