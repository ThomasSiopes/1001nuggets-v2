import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COLLECTION_NAME } from "../../utils/queries";

const CollectionButton = ({type, name, theme}) => {
    let {loading, data} = useQuery(QUERY_COLLECTION_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>
    
    let collection = data.collectionName;

    if(!collection) return <span>Loading...</span>

    if(type === "button") {
        return (
            <Button href={`/collection/${collection.realID}`} className="mx-1 mb-2" variant={theme}>{name}</Button>
        )
    } else if(type === "link") {
        return (
            <Link to={`/collection/${collection.realID}`} className="link-theme">{name}</Link>
        )
    }
}

export default CollectionButton;