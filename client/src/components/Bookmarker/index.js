import React from "react";
import Auth from "../../utils/auth";

import { Button } from "react-bootstrap";

const Bookmarker = () => {
    if(Auth.loggedIn()) return(
        <Button theme={"primary"}>O</Button>
    ); 
    else return (
        <Button theme={"danger"}>X</Button>
    )
}

export default Bookmarker;