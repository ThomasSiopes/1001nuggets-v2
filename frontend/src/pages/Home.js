import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SmallHome = React.lazy(() => import("../components/HomeSmall"));
const LargeHome = React.lazy(() => import("../components/LargeHome"));

function Home () {      
    return (
        <HelmetProvider>
            <Helmet>
                <title>1001 Nuggets</title>
                <meta name="description" content={`Read over 20,000 quotes on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets`} />
                <meta property="og:description" content={`Read over 20,000 quotes on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com`} />
                <link rel="canonical" href={`https://1001nuggets.com`} />
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