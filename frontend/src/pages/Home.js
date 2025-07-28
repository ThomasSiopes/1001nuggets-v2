import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";


const QuoteOfTheDay = React.lazy(() => import("../components/QuoteOfTheDay"));
const SmallHome = React.lazy(() => import("../components/HomeSmall"));

function Home () {      
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <div className="text-center bg-main">
                <Container className="d-none d-sm-block">
                    <QuoteOfTheDay/>
                </Container>
                <div className="text-white d-xs-block d-sm-none">
                    <SmallHome/>
                </div>
            </div>
        </div>
    )
}

export default Home