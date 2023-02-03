import React from "react";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

import { Button } from "react-bootstrap";

import { QUERY_ACCOUNT_ME } from "../../utils/queries";
import { UPDATE_BOOKMARK } from "../../utils/mutations";

const Bookmarker = ({input}) => {
    let {loading, data} = useQuery(QUERY_ACCOUNT_ME);

    if(loading) return <div>Loading...</div>

    // if(!data) return <span>It's cappin, data should be coming back rn</span>

    const me = data.me;

    if(Auth.loggedIn()) {
        return(me.bookmarkedQuotes.includes(input) ? <Remover quoteList={me.bookmarkedQuotes}/> : <Adder quoteList={me.bookmarkedQuotes}/>)
    } else return (
        <span>You should not be seeing this if you're logged in.</span>
    )
}

const Adder = ({quoteList}) => {
    let copylist = {...quoteList}

    /// WIP
    
    return (<Button>O</Button>)
}

const Remover = ({quoteList}) => {
    let copylist = {...quoteList}

    console.log("Copylist: ");
    console.log(copylist);
    
    return (<Button>X</Button>)
}

export default Bookmarker;