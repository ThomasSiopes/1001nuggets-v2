import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";

import { QUERY_TOPIC_NAME } from "../../utils/queries";

const TopicButton = ({type, name}) => {
    let {loading, data} = useQuery(QUERY_TOPIC_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>
    
    let topic = data.topicName;

    if(!topic) return <span>Loading...</span>

    if(type === "button") {
        return (
            <Link to={`/topic/${topic._id}`}><Button className="mx-1" variant={"weak"}>{name}</Button></Link>
        )
    } else if(type === "link") {
        return (
            <Link to={`/topic/${topic._id}`} className="link-theme">{name}</Link>
        )
    }
}

export default TopicButton;