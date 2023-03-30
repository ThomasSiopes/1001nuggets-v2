import React, { useState } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable'
import { Link } from 'react-router-dom';

import { FiShare, FiArrowLeft, FiArrowRight } from "react-icons/fi";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";
import CollectionButton from '../CollectionButton';

function QuoteCard({quotes, quoteIndex}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);

  const handlers = useSwipeable({
    onSwiped: (eventData) => alert("User Swiped!", eventData)
  });

  const handleClose = () => {
    setShow(false);
    setIndex(quoteIndex);
  };
  const handleShow = () => {
    setShow(true);
    setIndex(quoteIndex);
  };

  const handleIncrease = () => {
    setIndex(currentQuote+1);
  }

  const handleDecrease =() => {
    setIndex(currentQuote-1);
  }

  if(quotes && quotes[quoteIndex] && quotes[currentQuote]) {
    return (
    <div {...handlers}>
      <Card>
        <Card.Body className="quote-card" onClick={handleShow}>
            <Card.Text className="font-poppins" id="upward">{quotes[quoteIndex].quoteText}</Card.Text>
            {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[quoteIndex].author}/>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        
        <Modal.Header className="text-theme" closeButton/>

        {/* <Modal.Body className="quote-card">
            <Container className="font-poppins">
              <h2>{quotes[currentQuote].quoteText}</h2>
            </Container>
            <Container className="mt-3">
              <strong>
                {quotes[currentQuote].author && <AuthorButton type={"link"} name={quotes[currentQuote].author}/>}
              </strong>
            </Container>
        </Modal.Body>

        <Modal.Footer className="justify-content-center align-items-center">
            {quotes[currentQuote-1] && 
              <Button className="mb-2 b-none" variant={"light"} onClick={handleDecrease} onKeyDown={handleDecrease}><FiArrowLeft/></Button>
            }
            {quotes[currentQuote].topics.length > 0 && 
                <span> 
                    {quotes[currentQuote].topics.map((topic) => (
                        <TopicButton type={"button"} name={topic} key={quotes[currentQuote].quoteText + topic}/>
                    ))}
                </span>
            }
            {quotes[currentQuote+1] && 
              <Button className="mb-2 b-none" variant={"light"} onClick={handleIncrease} onKeyUp={handleIncrease}><FiArrowRight/></Button>
            }
        </Modal.Footer>
        {quotes[currentQuote].collections[0] &&
          <Modal.Footer className="justify-content-center"> 
              <span>Under Collection:</span>
              <span>
                  {quotes[currentQuote].collections.map((collection) => (
                      <CollectionButton type={"button"} name={collection} key={quotes[currentQuote].quoteText + collection}/>
                  ))}
              </span>
          </Modal.Footer>
        }
        <Modal.Footer className="justify-content-center">
          <Link className="mb-1 btn btn-theme" to={`/quote/${quotes[currentQuote].realID}`}>Share <FiShare/></Link>
        </Modal.Footer> */}
        <Carousel activeIndex={quoteIndex}>
          <Carousel.Item>
            
          </Carousel.Item>
        </Carousel>
      </Modal>
    </div>
  )}
  else return(<p>Loading...</p>)
}

export default QuoteCard;