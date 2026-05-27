import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SmallHome = React.lazy(() => import("../components/HomeSmall"));
const LargeHome = React.lazy(() => import("../components/LargeHome"));

function Home () {      
    return (
        <HelmetProvider>
            <Helmet>
                <title>1001 Nuggets</title>
                <meta name="description" content={`Read over 20,000 organized quotes and proverbs, all at the push of a button at 1001nuggets.com.`} />
                <meta property="og:title" content={`1001 Nuggets`} />
                <meta property="og:description" content={`Read over 20,000 organized quotes and proverbs, all at the push of a button at 1001nuggets.com.`} />
                <meta property="og:url" content={`https://1001nuggets.com`} />
                <link rel="canonical" href={`https://1001nuggets.com`} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "1001 Nuggets",
                    "url": "https://www.1001nuggets.com",
                    "description": "Read over 20,000 organized quotes and proverbs, all at the push of a button at 1001nuggets.com.",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://www.1001nuggets.com/search/{search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                })}</script>
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