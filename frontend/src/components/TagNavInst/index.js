import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TAG_LETTER } from "../../utils/queries";
// import LoadingOverlay from "../../components/LoadingOverlay";

function TagNavInst({ letter }) {
    const ref = useRef(null);
    const { loading, data } = useQuery(QUERY_TAG_LETTER, {
        variables:{letter:letter}, fetchPolicy:"cache-and-network"
    });

    if (loading) return <div ref={ref}>
        {/* <LoadingOverlay show={loading && !data} /> */}
        <span>Loading {letter}s...</span>
        </div>;
    if (!data)   return <div ref={ref} />;

    let sortedList = data.tagLetter.map((item) => Object.assign({}, item, {selected:false}))
    
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
        </>
    );
}

export default TagNavInst;