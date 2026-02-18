import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_TAG_LETTER } from "../../utils/queries";

function TagNavInst({letter}) {
    let {loading, data, error} = useQuery(QUERY_TAG_LETTER, {variables: {letter: letter},});

    if(loading) return <span>Loading {letter}s...</span>

    if(error) {
        console.log(error)
    }
    
    if(!data) return <span>...</span>;

    let sortedList = data.tagLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort((a,b) => {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <div className="text-center mb-2">
            {sortedList.map((index) => (
                <div key={letter + index.tag}>
                    <p><strong><Link to={`/authortag/${index._id}`} className="link-theme">{index.tag}</Link></strong></p>
                    <hr/>
                </div>
            ))}
            {/* <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div> */}
        </div>
    );
}

export default TagNavInst;