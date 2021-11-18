import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import MetaTags from "react-meta-tags";

import {QUERY_QUOTE_ALL, GET_QOTD} from "../utils/queries";
import { SET_QOTD } from "../utils/mutations";

function Scoreboard() {
    const queryQuotes = useQuery(QUERY_QUOTE_ALL);
    const [setQOTD, {error}] = useMutation(SET_QOTD);
    const getQOTD = useQuery(GET_QOTD);

    const randomize = (event) => {
        event.preventDefault();
        let quotes = queryQuotes.data.quotes;
        console.log(quotes);
        mutate(quotes)
    }

    const mutate = (quoteList) => {
        let random = quoteList[Math.floor(Math.random() * quoteList.length)];
        console.log(random);

        setQOTD({variables: { newID: random._id }});

        console.log("Checking... ");
        let newData = getQOTD.data.QOTD;
        console.log(newData[0]);
    }

    return (
        <Container>
            <MetaTags>
                <title>1001 Nuggets</title>
            </MetaTags>
            <Card>
                <Card.Body>
                    <Button onClick={randomize}>Randomize</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Scoreboard;
