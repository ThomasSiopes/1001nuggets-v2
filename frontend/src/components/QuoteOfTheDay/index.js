import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import AuthorButton from "../AuthorButton";
import TopicButton from "../TopicButton";
import { FaXTwitter, FaFacebookF  } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import truthSocialImage from "../../assets/images/truthsocial.png";

import { QUERY_QOTD, QUERY_QUOTE_REALID } from "../../utils/queries";

function QuoteOfTheDay(){
    let {loading, data} = useQuery(QUERY_QOTD)
    if(loading) return <p>Loading...</p>

    const QOTD = data.dailyQuote[0].index

    return(
        <QuoteCard realID={QOTD}/>
    )
}

function QuoteCard({realID}) {
    let {loading, data} = useQuery(QUERY_QUOTE_REALID, {
        variables: {quoteRealId: realID},
    })
    if(loading) return <p>Loading quote card...</p>

    if(!data || !data.quoteR.quoteText) return <Card><Card.Body><h1>No Current Quote of the Day</h1></Card.Body></Card>

    const Quote = data.quoteR

    return(
        <div>
            <Card className="my-4">
                <div id="quote-page">
                    <Card.Header className="bg-light text-black"><h3>Quote of the Day</h3></Card.Header>
                    <Card.Body>
                        <Card.Text className="display-6 text-center"><span className="quote-body font-poppins" id="main-quote">{Quote.quoteText}</span></Card.Text>
                        <Card.Text className="text-end pe-2"><strong><AuthorButton type={"link"} name={Quote.author} realID={Quote.authorRealID}/></strong></Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <a className="mx-2 share-button" target="_blank" aria-label="Share on X" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${window.location.href} - "${Quote.quoteText}" - ${Quote.author}`} id="share-X"><FaXTwitter/></a>
                        <a className="mx-2 share-button" target="_blank" aria-label="Share on Facebook" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}quote/${Quote.realID} - "${Quote.quoteText}" - ${Quote.author}`} id="share-facebook"><FaFacebookF/></a>
                        <a className="mx-2 share-button share-truth" target="_blank" aria-label="Share on TruthSocial" rel="noreferrer" href={`https://truthsocial.com/share?text=${window.location.href}quote/${Quote.realID} - "${Quote.quoteText}" - ${Quote.author}`} id="share-truth"><img src={truthSocialImage} alt="TS" loading="lazy"/></a>
                        <span className="mx-2" onClick={() => {
                            if(navigator.canShare) {
                                navigator.share({
                                title:"1001 Nuggets",
                                text:"\"" + Quote.quoteText + "\" - " + Quote.author,
                                url: window.location.href
                                });
                            } else {
                              alert("Cannot navigate")
                            }
                        }}>
                          <FiShare className="text-white cool-share-button"/>
                        </span>
                    </Card.Body>
                </div>
                {Quote.topics.length !== 0 && 
                    <Card.Footer className="text-center py-3">
                            {Quote.topicDetails.map((index) => (
                                <TopicButton type={"button"} name={index.name} realID={index.realID} theme={"weak"} key={index.realID + index.name}/>
                            ))}
                    </Card.Footer>
                }
            </Card>
        </div>
    )
}

export default QuoteOfTheDay;