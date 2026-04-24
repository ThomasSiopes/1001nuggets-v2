import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { QUERY_COLLECTION_LETTER } from "../../utils/queries";

function CollectionNavInst({ letter }) {
    const ref = useRef(null);
    const [fetchLetter, { loading, data }] = useLazyQuery(QUERY_COLLECTION_LETTER, {
        fetchPolicy: "cache-and-network"
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { fetchLetter({variables: { letter }}); observer.disconnect(); } },
            { rootMargin: "200px" } // start fetching 200px before it enters view
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [fetchLetter]);

    if (loading) return <div ref={ref}><span>Loading {letter}s...</span></div>;
    if (!data)   return <div ref={ref} />;
    
    let sortedList = data.collectionLetter.map((item) => Object.assign({}, item, {selected:false}))
    
    sortedList = sortedList.sort(function(a,b) {
        if(a.sortedName < b.sortedName) return -1;
        if(a.sortedName > b.sortedName) return 1;
        return 0;
    });

    if(sortedList.length === 0) return <span/>

    return(
        <div ref={ref} className="text-center mb-2">
            {/* <div>
                <strong id={letter}>{letter.toUpperCase()}</strong>
                <hr/>
            </div> */}
            {sortedList.map((index) => (
                <div key={letter + index.name}>
                    <p><strong><Link to={`/collection/${index.realID}`} className="link-theme">{index.name}</Link></strong></p>
                    {/* <p>({index.collections.length} collections)</p> */}
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default CollectionNavInst;