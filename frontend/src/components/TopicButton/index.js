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

    switch(type){
        case "button": 
            return (
                <Button href={`/topic/${topic.realID}`} className="mx-1 mb-2" variant={theme}>{name}</Button>
            );
        case "button-block": 
            return (
                <Button href={`/topic/${topic.realID}`} className="btn-block" variant={theme}>{name}</Button>
            )
        case "link": 
            if(theme === "related") {
                return (
                    <Link to={`/topic/${topic.realID}`} className="link-related">{name}</Link>
                )
            }
            else if(theme === "unrelated") {
                return (
                    <Link to={`/topic/${topic.realID}`} className="link-unrelated">{name}</Link>
                )
            }
            else {
                return (
                    <Link to={`/topic/${topic.realID}`} className="link-theme">{name}</Link>
                )
            }
        default:
            return <p>Loading...</p>
    }
}

export default TopicButton;


