import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PEOPLE_LETTER } from "../../utils/queries";
import LoadingOverlay from "../../components/LoadingOverlay";

function PeopleNavInst({ letter }) {
    const ref = useRef(null);
    const { loading, data } = useQuery(QUERY_PEOPLE_LETTER, {
        variables:{letter:letter}, fetchPolicy:"cache-and-network"
    });

    if (loading) return <div ref={ref}><span>Loading {letter}s...</span></div>;
    if (!data)   return <div ref={ref} />;

    let sortedList = data.peopleByLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <>
        <LoadingOverlay show={loading && !data} />
        <div ref={ref} className="text-center mb-2">
            {sortedList.map((index) => (
                <div key={letter + index.name}>
                    <p><strong><Link to={`/person/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
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

export default PeopleNavInst;