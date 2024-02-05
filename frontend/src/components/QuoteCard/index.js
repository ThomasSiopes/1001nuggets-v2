import React, { useState, useRef } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import { FiShare } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TopicButton from "../TopicButton";
import CollectionButton from "../CollectionButton";
import AuthorButton from "../AuthorButton";
import QuoteCardText from '../QuoteCardText';

function QuoteCard({quotes, quoteIndex, indexOrder}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);
  const fontSize = useRef(24);

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

  const handleFontResize = () => {
    let slider = document.getElementById("myRange");
    let targets = document.getElementsByClassName("targetText");
    fontSize.current = slider.value;
    for(let index of targets) index.style.fontSize = fontSize.current + "px";
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
                {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[quoteIndex].author}/>}
              </strong>
            </p>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="text-theme" closeButton/>

      {/* Slider */}
        <input type="range" className="mx-2 slider" min="20" max="40" id="myRange" onInput={handleFontResize}/>

        <Carousel activeIndex={currentQuote} indicators={false} interval={null} onSelect={handleSelect} touch={true} wrap={false} prevIcon={<MdKeyboardArrowLeft stroke={"black"} fill={"black"}/>} nextIcon={<MdKeyboardArrowRight stroke={"black"} fill={"black"}/>}>
          {indexOrder.map((index) => (
            <Carousel.Item key={quotes[index].quoteText}>
              <Container className="quote-card py-4">
                {/* Quote */}
                <QuoteCardText type={"modal"} quotes={quotes} index={index}/>

                {/* Author */}
                <Container className="mt-3 pe-4 text-end">
                  <strong>
                    {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[index].author}/>}
                  </strong>
                </Container>
              </Container>

              {/* Topic */}
              {quotes[index].topics && quotes[index].topics.length > 0 && <Modal.Footer className="justify-content-center align-items-center text-center"> 
                  <div className="width100"> 
                      {quotes[index].topics.map((topic) => (
                          <TopicButton type={"button"} name={topic} theme={"weak"} key={quotes[index].quoteText + topic}/>
                      ))}
                  </div>
                  <div className="text-start mx-2">
                    <span>Related: </span>
                    {quotes[index].relatedTopics && <span>
                        {quotes[index].relatedTopics.map((related) => (
                            <span>
                              {
                                related === quotes[index].relatedTopics[quotes[index].relatedTopics.length-1] ?
                                  <span><u><TopicButton type={"link"} name={related} theme={"small"} key={quotes[index].quoteText + "related" + related}/></u></span>
                                  :
                                  <span><u><TopicButton type={"link"} name={related} theme={"small"} key={quotes[index].quoteText + "related" + related}/></u>, </span>
                              }
                            </span>
                        ))}
                    </span>}
                    {/* {quotes[index].unrelatedTopics && <span>
                        {quotes[index].unrelatedTopics.map((unrelated) => (
                            <TopicButton type={"link"} name={unrelated} theme={"smallun"} key={quotes[index].quoteText + "unrelated" + unrelated}/>
                        ))}
                    </span>} */}
                  </div>
              </Modal.Footer>}

              {/* Collection */}
              {quotes[index].collections && quotes[index].collections.length > 0 && <Modal.Footer className="justify-content-center align-items-center">
                  <span className="text-center">
                      {quotes[index].collections.map((collection) => (
                          <CollectionButton type={"button"} name={collection} theme={"weak"} key={quotes[index].quotesText + collection}/>
                      ))}
                  </span>
              </Modal.Footer>}
              <Modal.Footer className="justify-content-center">
                {/* <Link className="mb-1 btn btn-theme" to={`/quote/${quotes[index].realID}`}>Share <FiShare/></Link> */}
                <Button variant={"weak"} onClick={() => {
                    if(navigator.canShare) {
                      navigator.share({
                      title:"1001 Nuggets",
                      text: "\"" + quotes[index].quoteText + "\" - " + quotes[index].author,
                      url: (window.location.origin + "/quote/" + quotes[index].realID)
                      });
                    } else {
                      alert("Cannot navigate")
                    }
                }}>
                  <FiShare/>
                </Button>
              </Modal.Footer>
            </Carousel.Item>
          ))}
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

export default QuoteCard;