import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_TOPIC_NAME } from "../../utils/queries";

const TopicButton = ({type, name, theme}) => {
    let {loading, data} = useQuery(QUERY_TOPIC_NAME, {
        variables: {name: name},
    })

    if(loading) return <span>Loading...</span>
    
    let topic = data.topicName;

    if(!topic) return <span>Loading...</span>

    if(type === "button") {
        return (
            <Button href={`/topic/${topic.realID}`} className="mx-1 mb-2" variant={theme}>{name}</Button>
        )
    } else if(type === "link") {
        return (
            <Link to={`/topic/${topic.realID}`} className="link-theme">{name}</Link>
        )
    }
}

export default TopicButton;