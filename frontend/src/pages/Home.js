import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap"

const QuoteOfTheDay = React.lazy(() => import("../components/QuoteOfTheDay"))

function Home () {    
    return (
        <div>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <Container className="text-center">
                <QuoteOfTheDay/>                
            </Container>
        </div>
    )
}

export default Home