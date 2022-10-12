import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COLLECTION_NAME } from "../../utils/queries";

const CollectionButton = ({type, name}) => {
    let {loading, data} = useQuery(QUERY_COLLECTION_NAME, {
        variables: {name: name},
    })

    if(loading) {console.log("Loading...."); return <span>Loading...</span>}
    
    let collection = data.collectionName;

    if(!collection) {console.log("No collection..."); return <span>Loading...</span>}

    if(type === "button") {
        return (
            <Link to={`/collection/${collection.realID}`} className="mx-1 btn btn-weak">{name}</Link>
        )
    } else if(type === "link") {
        return (
            <Link to={`/collection/${collection.realID}`} className="link-theme">{name}</Link>
        )
    }
}

export default CollectionButton;