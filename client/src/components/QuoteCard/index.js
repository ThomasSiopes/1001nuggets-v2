import React, { useState } from 'react';
import { Button, Card, Modal, Container } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable'
import { Link } from 'react-router-dom';

import { FiShare } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";
import CollectionButton from '../CollectionButton';

let normIndex;

function QuoteCard({quotes, quoteIndex}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleIncrease(),
    onSwipedRight: () => {
      if(currentQuote === "special") handleDecreaseSpecial()
      else handleDecrease()
    }
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
    if(quotes[currentQuote+1]) setIndex(currentQuote+1); 
    else {
      if(currentQuote === "special") handleClose();
      else {
        normIndex = currentQuote;
        setIndex("special");
      }
    }
  }

  const handleDecrease = () => {
    if(quotes[currentQuote-1]) setIndex(currentQuote-1);
    else handleClose();
  }

  const handleDecreaseSpecial = () => {
    if(normIndex) setIndex(normIndex);
    else handleClose();
  }

  if(quotes && quotes[quoteIndex] && (quotes[currentQuote] || currentQuote === "special")) {
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
        {currentQuote === "special" ?
          <span>
            <Modal.Body className="quote-card py-5" {...handlers}>
              <Button className="floating-side-button-left p-0 b-none" variant={"transparent"} onClick={handleDecreaseSpecial} onKeyDown={handleDecreaseSpecial}><MdKeyboardArrowLeft/></Button>
              <div className="text-center">
              <Button variant={"theme"} className="text-center" href="https://www.amazon.com">See more on Amazon</Button>
              </div>
            </Modal.Body>
          </span>
          :
          <span>
            <Modal.Body className="quote-card" {...handlers}>
                  {quotes[currentQuote-1] && 
                    <Button className="floating-side-button-left p-0 b-none" variant={"transparent"} onClick={handleDecrease} onKeyDown={handleDecrease}><MdKeyboardArrowLeft/></Button>
                  }
                    <Button className="floating-side-button-right p-0 b-none" variant={"transparent"} onClick={handleIncrease} onKeyUp={handleIncrease}><MdKeyboardArrowRight/></Button>
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
              {quotes[currentQuote].topics.length > 0 && 
                  <span> 
                      {quotes[currentQuote].topics.map((topic) => (
                          <TopicButton type={"button"} name={topic} key={quotes[currentQuote].quoteText + topic}/>
                      ))}
                  </span>
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
          </Modal.Footer>
        </span>
        }
      </Modal>
    </div>
  )}
  else return(<p>Loading...</p>)
}

export default QuoteCard;