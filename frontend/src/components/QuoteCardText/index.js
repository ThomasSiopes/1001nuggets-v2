import React from "react";
import { Card, Container } from "react-bootstrap"

function QuoteCardText({type, quotes, index}) {
    let split = 0
    let censors = ["bullshit", "bullshitting", "shit", "shitting", "shitty", "fuck", "fucking", "fucked", "n*gger","nigger"];

    if(quotes[index]) split = quotes[index].quoteText.split(/(\s+)/);
    if(split) {
        for(let i = 0; i < split.length; ++i) {
            let check = false;
            for(let n = 0; n < censors.length; ++n) {
                if(split[i].toUpperCase().replace(/[^\w]/g, "") === censors[n].toUpperCase().replace(/[^\w]/g, "")) check = true;
            }

            if(check) split[i] = <span className="censor" key={"split" + split[i] + i}>{split[i]}</span>
            else split[i] = <span key={"split" + split[i] + i}>{split[i]}</span>
        }
    }

    if(type === "modal") {
        return (
            <Container className="font-poppins">
                <strong><p className="quote-modal-text text-center targetText">
                    {split.map((index3) => index3)}
                </p></strong>
            </Container>
        )
    }else {
        return (
            <Card.Text className="font-poppins text-center">
                    {split.map((index3) => index3)}
            </Card.Text>
        )
    }
}

export default QuoteCardText;