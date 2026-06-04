import React, { useState, memo } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { FiShare } from "react-icons/fi";
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import truthSocialImage from "../../assets/images/truthsocial.png";

import TopicButton from "../TopicButton";
import CollectionButton from "../CollectionButton";
import AuthorButton from "../AuthorButton";
import QuoteCardText from '../QuoteCardText';

function QuoteCard({quotes, quoteIndex, indexOrder, relatedAuthors}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);
  const [fontSize, setFontSize] = useState(23);

  const handleClose = () => {
    setShow(false);
    setIndex(quoteIndex);
  };

  const handleShow = () => {
    setIndex(indexOrder.indexOf(quoteIndex));
    setShow(true);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const handleFontResize = (e) => {
    setFontSize(Number(e.target.value));
  }

  if(quotes) {
    return (
    <div>
      <Card>
        <Card.Body className="quote-card rounded" onClick={handleShow}>
            <strong>
              <QuoteCardText type={null} quotes={quotes} index={quoteIndex}/>
            </strong>
            <p className="text-end mb-0">
              <strong>
                {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[quoteIndex].author} realID={quotes[quoteIndex].authorRealID}/>}
              </strong>
            </p>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="text-theme" closeButton/>

        {/* Slider */}
        <input type="range" className="mx-2 slider" min="17" max="35" value={fontSize} id="myRange" onChange={handleFontResize}/>

        <Carousel activeIndex={currentQuote} indicators={false} interval={null} onSelect={handleSelect} touch={true} wrap={false} prevIcon={<MdKeyboardArrowLeft stroke={"black"} fill={"black"}/>} nextIcon={<MdKeyboardArrowRight stroke={"black"} fill={"black"}/>}>
          {indexOrder.map((index, position) => {
            const isNearby = Math.abs(position - currentQuote) <= 1;
            return (
              <Carousel.Item key={quotes[index].realID}>
                {isNearby ? (
                  <span>
                    <Container className="quote-card quote-card-m py-4">
                      {/* Quote */}
                      <QuoteCardText type={"modal"} quotes={quotes} index={index} fontSize={fontSize}/>

                      {/* Author */}
                      <Container className="mt-3 pe-4 text-end">
                        <strong>
                          {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[index].author} realID={quotes[quoteIndex].authorRealID}/>}
                        </strong>
                      </Container>
                      {/* <Container className="justify-content-center text-center mt-2 align-items-center">
                        <a className="mx-2 share-button share-X" target="_blank" aria-label="Share on X" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=https://www.1001nuggets.com/quote/${quotes[index].realID} - "${quotes[index].quoteText}" - ${quotes[index].author}`}><FaXTwitter/></a>
                        <a className="mx-2 share-button share-facebook" target="_blank" aria-label="Share on Facebook" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.1001nuggets.com/quote/${quotes[index].realID} - "${quotes[index].quoteText}" - ${quotes[index].author}`}><FaFacebookF/></a>
                        <a className="mx-2 share-button share-truth" target="_blank" aria-label="Share on TruthSocial" rel="noreferrer" href={`https://truthsocial.com/share?text=https://www.1001nuggets.com/quote/${quotes[index].realID} - "${quotes[index].quoteText}" - ${quotes[index].author}`}><img src={truthSocialImage} alt="TS" loading="lazy"/></a>
                        <span className="mx-2" onClick={() => {
                          if(navigator.canShare) {
                            navigator.share({
                            title:"1001 Nuggets",
                            text: "\"" + quotes[index].quoteText + "\" - " + quotes[index].author,
                            url: (window.location.origin + "/quote/" + quotes[index].realID)
                            });
                          } else {
                            alert("Cannot navigate")
                          }
                          }}><FiShare className="text-white cool-share-button"/>
                          </span>
                      </Container> */}
                    </Container>

                    {/* Topic */}
                    {quotes[index].topicDetails && quotes[index].topicDetails.length > 0 && 
                      <Modal.Footer className="justify-content-center align-items-center text-center"> 
                        <div className="width100">
                            {quotes[index].topicDetails.map((topicDetail) => (
                                <TopicButton type={"button"} name={topicDetail.name} realID={topicDetail.realID} theme={"weak"} key={quotes[index].realID + topicDetail.name}/>
                            ))}
                        </div>

                        <div className="text-start text-theme mx-2">
                          
                          {/* Related Topics */}
                          {quotes[index].relatedTopicDetails && 
                            <span>
                              {quotes[index].relatedTopicDetails.map((detail) => (
                                  <span key={quotes[index].realID + "related" + detail.name}>
                                    {
                                      detail === quotes[index].relatedTopicDetails[quotes[index].relatedTopicDetails.length-1] ?
                                        <span><u><TopicButton type={"link"} name={detail.name} realID={detail.realID} theme={"related"}/></u></span>
                                        :
                                        <span><u><TopicButton type={"link"} name={detail.name} realID={detail.realID} theme={"related"}/></u>; </span>
                                    }
                                  </span>
                              ))}
                            </span>}
                          
                          {/* Unrelated Topics */}
                          {quotes[index].unrelatedTopicDetails && 
                            <span>
                              {quotes[index].unrelatedTopicDetails.map((detail) => (
                                  <span key={quotes[index].realID + "unrelated" + detail.name}>
                                    <span>; <u><TopicButton type={"link"} name={detail.name} realID={detail.realID} theme={"unrelated"}/></u></span>
                                  </span>
                              ))}
                            </span>}
                        </div>
                      </Modal.Footer>}

                    {/* Collection */}
                    {quotes[index].collections && quotes[index].collections.length > 0 && <Modal.Footer className="justify-content-center align-items-center">
                        <span className="text-center">
                            {quotes[index].collections.map((collection) => (
                                <CollectionButton type={"button"} name={collection} theme={"weak"} key={quotes[index].realID + collection}/>
                            ))}
                        </span>
                    </Modal.Footer>}

                    {/* Share Buttons */}
                    {/* <Modal.Footer className="justify-content-center">
                      
                    </Modal.Footer> */}
                  </span>
                ) : (
                  <div style={({minHeight: "200px"})}/>
                )}
              </Carousel.Item>
            )
          })}
          <Carousel.Item>
              <div className="text-center quote-card py-5">
                <Button variant={"theme"} className="text-center" href="https://www.amazon.com">See more on Amazon</Button>
              </div>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </div>
  )}
  else return(<p>Loading...</p>)
}

export default memo(QuoteCard);
