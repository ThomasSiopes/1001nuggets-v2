import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_TOPIC_LETTER } from "../../utils/queries";

function TopicNavInst({letter}) {
    let {loading, data} = useQuery(QUERY_TOPIC_LETTER, {variables: {letter: letter},});

    if(loading) return <span>Loading {letter}s...</span>

    if(!data) return <span>...</span>;

    console.log(data)

    let sortedList = data.topicLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    return(
        <div className="text-center mb-2">
            <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div>
            {sortedList.map((index) => (
                <div key={letter + index.name}>
                    <p><strong><Link to={`/topic/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default TopicNavInst;