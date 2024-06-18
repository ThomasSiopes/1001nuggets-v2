import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_AUTHOR_LETTER } from "../../utils/queries";

function AuthorNavInst({letter}) {
    let {loading, data} = useQuery(QUERY_AUTHOR_LETTER, {variables: {letter: letter},});

    if(loading) return <span>Loading {letter}s...</span>

    if(!data) return <span>...</span>;

    let sortedList = data.authorLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.lastName < b.lastName) return -1;
        if(a.lastName > b.lastName) return 1;
        return 0;
    });

    let uglyList = []
    for(let i of sortedList) if(i.quotes.length === 0) uglyList.push(i.name);
    console.log("Letter " + letter + ": " + uglyList);

    return(
        <div className="text-center mb-2">
            <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div>
            {sortedList.map((index) => (
                <div key={letter + index.name}>
                    <p><strong><Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                    <p>({index.quotes.length} quotes)</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default AuthorNavInst;