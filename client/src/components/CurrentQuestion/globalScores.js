import React from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "react-bootstrap";

import { QUERY_SCORES } from "../../utils/queries";

const GlobalScores = () => {
    let {loading, data} = useQuery(QUERY_SCORES);

    if(loading) return <p>Loading...</p>

    const globalScores = data.scores

    return (
        <div>
            <p>Global Results:</p>
            <Row>
                {globalScores.map((n) => (
                    <Col key={n.name + n.value}>
                        <p>{n.name} : {n.score}</p>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default GlobalScores;