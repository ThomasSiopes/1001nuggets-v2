import React from "react";
import { Col, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AuthorLink = ({input}) => {
    return (
        <Col sm={4} md={12} className="mb-2">
            {(input.type === "Website" || input.type === "Site" || input.type === "WebSite") &&
                <Button variant={"theme"} className="btn-block" href={input.link}>Site</Button>    
            }
            {(input.type === "Facebook" || input.type === "FaceBook") &&
                <Button variant={"theme"} className="btn-block" href={input.link}><FaFacebook/></Button>    
            }
            {(input.type === "Twitter") &&
                <Button variant={"theme"} className="btn-block" href={input.link}><FaTwitter/></Button>
            }
            {(input.type === "Instagram" || input.type === "InstaGram") &&
                <Button variant={"theme"} className="btn-block" href={input.link}><FaInstagram/></Button>
            }
            {(input.type === "Youtube" || input.type === "YouTube") &&
                <Button variant={"theme"} className="btn-block" href={input.link}><FaYoutube/></Button>
            }
            {(input.type !== "Website" && input.type !== "Site" && input.type !== "WebSite" && input.type !== "Facebook" && input.type !== "FaceBook" && input.type !== "Twitter" && input.type !== "Instagram" && input.type !== "InstaGram" && input.type !== "Youtube" && input.type !== "YouTube") &&
                <Button variant={"theme"} className="btn-block smaller-text" href={input.link}>{input.type}</Button>
            }
        </Col>
    )
}

export default AuthorLink;