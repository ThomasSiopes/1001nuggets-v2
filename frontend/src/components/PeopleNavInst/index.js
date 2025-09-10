import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PEOPLE_LETTER } from "../../utils/queries";

function PeopleNavInst({letter}) {
    let {loading, data} = useQuery(QUERY_PEOPLE_LETTER, {variables: {letter: letter},});

    if(loading) return <span>Loading {letter}s...</span>

    if(!data) return <span>...</span>;

    let sortedList = data.peopleLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort((a,b) => {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <div className="text-center mb-2">
            <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div>
            {sortedList.map((index) => (
                <div key={letter + index.people}>
                    <p><strong><Link to={`/people/${index._id}`} className="link-theme">{index.people}</Link></strong></p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default PeopleNavInst;