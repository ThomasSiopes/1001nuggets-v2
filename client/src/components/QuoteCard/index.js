import React, { useState } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FiShare } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

function QuoteCard({quotes, quoteIndex}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);

  const handleClose = () => {
    setShow(false);
    setIndex(quoteIndex);
  };
  const handleShow = () => {
    setShow(true);
    setIndex(quoteIndex);
    console.log(quoteIndex);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  if(quotes) {
    return (
    <div>
      <Card>
        <Card.Body className="quote-card" onClick={handleShow}>
            <Card.Text className="font-poppins" id="upward">{quotes[quoteIndex].quoteText}</Card.Text>
            {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[quoteIndex].author}/>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="text-theme" closeButton/>
        <Carousel activeIndex={currentQuote} indicators={false} interval={null} onSelect={handleSelect} touch={true} wrap={false} prevIcon={<MdKeyboardArrowLeft stroke={"black"} fill={"black"}/>} nextIcon={<MdKeyboardArrowRight stroke={"black"} fill={"black"}/>}>
          {quotes.map((index) => (
            <Carousel.Item key={index.quoteText}>
              <Container className="quote-card py-4">
                <Container className="font-poppins">
                  <h2>{index.quoteText}</h2>
                </Container>
                <Container className="mt-3">
                  <strong>
                    {index.author && <AuthorButton type={"link"} name={index.author}/>}
                  </strong>
                </Container>
              </Container>
              {index.topics && index.topics.length > 0 && <Modal.Footer className="justify-content-center align-items-center"> 
                  <span> 
                      {index.topics.map((topic) => (
                          <TopicButton type={"button"} name={topic} theme={"theme"} key={index.quoteText + topic}/>
                      ))}
                  </span>
              </Modal.Footer>}
              {/* {index.collections[0] &&
              <Modal.Footer className="justify-content-center"> 
                <span>Under Collection:</span>
                <span>
                    {index.collections.map((collection) => (
                        <CollectionButton type={"button"} name={collection} key={index.quoteText + collection}/>
                    ))}
                </span>
              </Modal.Footer>
              } */}
              {index.nuggets && index.nuggets.length > 0 && <Modal.Footer className="justify-content-center bg-theme">
                  <span>
                      {index.nuggets.map((related) => (
                        <TopicButton type={"button"} name={related} theme={"weak"} key={index.quoteText + related}/>
                      ))}
                  </span>
              </Modal.Footer>}
              <Modal.Footer className="justify-content-center">
                <Link className="mb-1 btn btn-theme" to={`/quote/${index.realID}`}>Share <FiShare/></Link>
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