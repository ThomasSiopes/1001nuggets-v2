import React, { useState } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FiShare } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

function QuoteCard({quotes, quoteIndex, indexOrder}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);

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
          {indexOrder.map((index) => (
            <Carousel.Item key={quotes[index].quoteText}>
              <Container className="quote-card py-4">
                <Container className="font-poppins">
                  <h2>{quotes[index].quoteText}</h2>
                </Container>
                <Container className="mt-3">
                  <strong>
                    {quotes[index].author && <AuthorButton type={"link"} name={quotes[index].author}/>}
                  </strong>
                </Container>
              </Container>
              {quotes[index].topics && quotes[index].topics.length > 0 && <Modal.Footer className="justify-content-center align-items-center"> 
                  <span className="text-center"> 
                      {quotes[index].topics.map((topic) => (
                          <TopicButton type={"button"} name={topic} theme={"theme"} key={quotes[index].quoteText + topic}/>
                      ))}
                  </span>
              </Modal.Footer>}
              {quotes[index].relatedTopics && quotes[index].relatedTopics.length > 0 && <Modal.Footer className="justify-content-center align-items-center"> 
                  <span className="text-center"> 
                      {quotes[index].relatedTopics.map((related) => (
                          <TopicButton type={"button"} name={related} theme={"theme"} key={quotes[index].quoteText + related}/>
                      ))}
                  </span>
              </Modal.Footer>}
              <Modal.Footer className="justify-content-center">
                <Link className="mb-1 btn btn-theme" to={`/quote/${quotes[index].realID}`}>Share <FiShare/></Link>
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