import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthorButton = ({type, name, realID, whitened, theme}) => {
    if(!realID) return <span>{name}</span>
    
    switch(type){
        case "button":
            return (
                <Link to={`/author/${realID}`}><Button variant={"theme"}>{name}</Button></Link>
            )
        case "button-block": 
            return (
                <Button href={`/author/${realID}`} className="btn-block" variant={theme}>{name}</Button>
            )
        case "link":
            if(whitened) {
                return(
                    <Link to={`/author/${realID}`} className="link-weak">{name}</Link>
                )
            } else return (
                <Link to={`/author/${realID}`} className="link-theme">{name}</Link>
            )
        default: return <span>{name}</span>
    }
}

export default AuthorButton;