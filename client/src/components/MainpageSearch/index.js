import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../../utils/queries";

const MainPageSearch = () => {
    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    if(loading) return <p>Loading...</p>;

    let authorList = [];
    for(let index of data.authors){
        authorList.push(index)
    }
    // console.log(authorList);

    authorList = authorList.sort((a, b) => a.name.localeCompare(b.name));

    const searchFunction = () => {
        let input, filter, group, elements, a, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        group = document.getElementById("myGroup");
        elements = group.getElementsByTagName('div');

        console.log(elements)

        for (let i = 0; i < elements.length; i++) {
            a = elements[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) elements[i].style.display = ""; 
            else elements[i].style.display = "none";
        }
    }

    return (
        <Card>
            <input type="text" id="myInput" onKeyUp={searchFunction} placeholder="Search for an author..." className="mb-1"/>
            <Row id="myGroup" className="text-center">
                {authorList.map((index) => (
                    <Col xs={12} key= {"search: " + index.name} className="my-1">
                        <Link to={`/author/${index.realID}`} className="link-theme">{index.name}</Link>
                    </Col>
                ))}
            </Row>
        </Card>
    )
}

export default MainPageSearch;