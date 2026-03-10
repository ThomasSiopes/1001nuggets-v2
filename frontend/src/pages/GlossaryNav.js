import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import { useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { QUERY_GLOSSARY_ALL } from "../utils/queries";

import { Container, Card, Button } from "react-bootstrap";

function GlossaryNav () {
    const {loading, data} = useQuery(QUERY_GLOSSARY_ALL);

    if(loading) return <p>Loading Glossary...</p>

    if(!data) return <Navigate to="/404error" replace />;

    const glossary = data.glossaryAll;

    let sortedList = glossary.map((item) => Object.assign({}, item, {selected:false}));
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    return (
        <HelmetProvider>
            <Container className="pt-3">
                <Helmet>
                    <title>1001 Nuggets - Glossary</title>
                </Helmet>
                <Card className="justify-content-center text-center" bg={"transparent"} border={"none"}>
                    <Card.Header className="bg-light rounded py-3">
                        <h1>GLOSSARY</h1>
                    </Card.Header>
                    <Card.Body>
                        {sortedList.map((index) => (
                            <div className="mb-3" key={index.typing}>
                                <Button className="btn-block py-3" variant={"weak"} href={`/glossary/${index.typing}`}>
                                    {String(index.typing).charAt(0).toUpperCase() + String(index.typing).slice(1)}
                                </Button>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </HelmetProvider>
    );
}

export default GlossaryNav;