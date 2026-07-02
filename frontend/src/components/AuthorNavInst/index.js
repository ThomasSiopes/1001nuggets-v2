import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_AUTHOR_LETTER } from "../../utils/queries";
// import LoadingOverlay from "../../components/LoadingOverlay";

function AuthorNavInst({ letter }) {
    const ref = useRef(null);
    const { loading, data } = useQuery(QUERY_AUTHOR_LETTER, {
        variables: {letter:letter}, fetchPolicy: "cache-and-network"
    });

    if (loading && !data) return <div ref={ref}>
        {/* <LoadingOverlay show={loading && !data} /> */}
        <span>Loading {letter}s...</span>
        </div>;
    if (!data)   return <div ref={ref} />;

    let sortedList = data.authorLetter.map((item) => Object.assign({}, item, {selected:false}));
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.lastName < b.lastName) return -1;
        if(a.lastName > b.lastName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <>
        <div ref={ref} className="text-center mb-2">
            <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div>
            {sortedList.map((index) => (
                <span key={letter + index.name}>{index.quotes.length > 1 && <div>
                    <p><strong><Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                    <hr/>
                </div>}
                </span>
            ))}
        </div>
        </>
    );
}

export default AuthorNavInst;