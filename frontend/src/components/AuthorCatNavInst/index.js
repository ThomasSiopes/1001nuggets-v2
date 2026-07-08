import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_AUTHORCAT_LETTER } from "../../utils/queries";
// import LoadingOverlay from "../../components/LoadingOverlay";

function AuthorCatNavInst({ letter }) {
    const ref = useRef(null);
    const { loading, data } = useQuery(QUERY_AUTHORCAT_LETTER, {
        variables:{letter:letter}, fetchPolicy:"cache-and-network"
    });

    if (loading) return <div ref={ref}>
        {/* <LoadingOverlay show={loading && !data} /> */}
        <span>Loading {letter}s...</span>
        </div>;
    if (!data)   return <div ref={ref} />;

    let sortedList = data.authorCatLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort((a,b) => {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <>
        <div ref={ref} className="text-center mb-2">
            {sortedList.map((index) => (
                <div key={letter + index.name}>
                    <p><strong><Link to={`/author-catalogue/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                </div>
            ))}
            {/* <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div> */}
            <hr/>
        </div>
        </>
    );
}

export default AuthorCatNavInst;