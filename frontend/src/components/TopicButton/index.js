import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopicButton = ({type, name, realID, theme}) => {
    if(!realID) return <span>{name}</span>

    switch(type){
        case "button": 
            return (
                <Button href={`/topic/${realID}`} className="mx-1 mb-2" variant={theme}>{name}</Button>
            );
        case "button-block": 
            return (
                <Button href={`/topic/${realID}`} className="btn-block" variant={theme}>{name}</Button>
            )
        case "link": 
            if(theme === "related") {
                return (
                    <Link to={`/topic/${realID}`} className="link-related">{name}</Link>
                )
            }
            else if(theme === "unrelated") {
                return (
                    <Link to={`/topic/${realID}`} className="link-unrelated">{name}</Link>
                )
            }
            else {
                return (
                    <Link to={`/topic/${realID}`} className="link-theme">{name}</Link>
                )
            }
        default:
            return <span>{name}</span>
    }
}

export default TopicButton;


