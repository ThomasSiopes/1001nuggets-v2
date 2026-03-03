import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SmallHome = React.lazy(() => import("../components/HomeSmall"));
const LargeHome = React.lazy(() => import("../components/LargeHome"));

function Home () {      
    return (
        <HelmetProvider>
            <Helmet>
                <title>1001 Nuggets</title>
            </Helmet>
            <div className="text-center bg-main">
                <div className="d-none d-sm-block">
                    <LargeHome/>
                </div>
                <div className="text-white d-xs-block d-sm-none">
                    <SmallHome/>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Home