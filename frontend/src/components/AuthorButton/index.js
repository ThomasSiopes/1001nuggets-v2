import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const AuthorButton = ({type, name, whitened, theme}) => {
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>

    if(!data || data.authorName == null) return <span>{name}</span>
    
    let author = data.authorName;
    
    switch(type){
        case "button":
            return (
                <Link to={`/author/${author.realID}`}><Button variant={"theme"}>{name}</Button></Link>
            )
        case "button-block": 
            return (
                <Button href={`/author/${author.realID}`} className="btn-block" variant={theme}>{name}</Button>
            )
        case "link":
            if(whitened) {
                return(
                    <Link to={`/author/${author.realID}`} className="link-weak">{name}</Link>
                )
            } else return (
                <Link to={`/author/${author.realID}`} className="link-theme">{name}</Link>
            )
        default: return <p>Loading...</p>
    }
}

export default AuthorButton;