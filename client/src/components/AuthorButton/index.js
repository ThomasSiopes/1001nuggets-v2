import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const AuthorButton = ({type, name}) => {
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>
    
    let author = data.authorName;

    if(!author) return null;
    
    if(type === "button") {
        return (
            <Link to={`/author/${author.realID}`}><Button variant={"theme"}>{name}</Button></Link>
        )
    } else if(type === "link") {
        return (
            <Link to={`/author/${author.realID}`} className="link-theme">{name}</Link>
        )
    } else return <span>Loading...</span>
}

export default AuthorButton;