import React from "react";
import { Card, Container } from "react-bootstrap"

function QuoteCardText({type, quotes, index}) {
    let split = 0
    if(quotes[index]) split = quotes[index].quoteText.split(/(\s+)/);
    if(split) {
        for(let i = 0; i < split.length; ++i) {
            let check = false;
            if(quotes[index].censors) {
                for(let n = 0; n < quotes[index].censors.length; ++n) {
                    if(split[i].toUpperCase().replace(/[^\w]/g, "") === quotes[index].censors[n].toUpperCase().replace(/[^\w]/g, "")) check = true;
                }
            }

            if(check) split[i] = <span className="censor">{split[i]}</span>
            else split[i] = <span>{split[i]}</span>
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