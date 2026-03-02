import React, { memo, useMemo } from "react";
import { Card, Container } from "react-bootstrap"

const CENSORS = new Set(["BULLSHIT", "BULLSHITTING", "SHIT", "SHITTING", "SHITTY", "FUCK", "FUCKING", "FUCKED", "N*GGER","NIGGER"]);

function QuoteCardText({type, quotes, index, fontSize}) {
    const quoteText = quotes[index]?.quoteText;

    const split = useMemo(() => {
        if(!quoteText) return [];
        return quoteText.split(/(\s+)/).map((word, i) => {
            const normalized = word.toUpperCase().replace(/[^\w]/g, "");
            const isCensored = CENSORS.has(normalized);
            return(
                <span className={isCensored? "censor" : undefined} key={"split" + word + i}>{word}</span>
            );
        });
    }, [quoteText]);

    if(type === "modal") {
        return(
            <Container className="font-poppins">
                <strong>
                    <p className="quote-modal-text text-center targetText" style={fontSize ? {fontSize: `${fontSize}px`} : undefined}>{split}</p>
                </strong>
            </Container>
        );
    }
    return(
        <Card.Text className="font-poppins text-center">{split}</Card.Text>
    );
}

export default memo(QuoteCardText);