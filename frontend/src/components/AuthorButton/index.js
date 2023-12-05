import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const AuthorButton = ({type, name, whitened}) => {
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>

    if(!data || data.authorName == null) return <span>{name}</span>
    
    let author = data.authorName;
    
    if(type === "button") {
        return (
            <Link to={`/author/${author.realID}`}><Button variant={"theme"}>{name}</Button></Link>
        )
    } else if(type === "link") {
        if(whitened) {
            return(
                <Link to={`/author/${author.realID}`} className="link-weak">{name}</Link>
            )
        } else return (
            <Link to={`/author/${author.realID}`} className="link-theme">{name}</Link>
        )
    } else return <span>Loading...</span>
}

export default AuthorButton;