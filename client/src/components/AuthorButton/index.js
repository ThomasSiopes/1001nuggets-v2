import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const AuthorButton = ({name}) => {
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>
    
    let author = data.authorName;

    return (
        <Link to={`/author/${author._id}`}><Button variant={"theme"}>{name}</Button></Link>
    )
}

export default AuthorButton;