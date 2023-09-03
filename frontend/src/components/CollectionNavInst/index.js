import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_COLLECTION_LETTER } from "../../utils/queries";

function CollectionNavInst({letter}) {
    let {loading, data} = useQuery(QUERY_COLLECTION_LETTER, {variables: {letter: letter},});

    if(loading) return <span>Loading {letter}s...</span>

    if(!data) return <span>...</span>;

    let sortedList = data.collectionLetter.map((item) => Object.assign({}, item, {selected:false}))
    
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
                    <p><strong><Link to={`/collection/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                    <p>({index.quotes.length} quotes)</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default CollectionNavInst;