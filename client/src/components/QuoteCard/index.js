import React, { useState } from 'react';
import { Button, Card, Modal, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FiShare, FiArrowLeft, FiArrowRight } from "react-icons/fi";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";
import CollectionButton from '../CollectionButton';

function QuoteCard({quotes, quoteIndex}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);
  console.log(currentQuote)

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
    <>
      <Card>
        <Card.Body onClick={handleShow}>
            <Card.Text className="font-poppins" id="upward">{quotes[quoteIndex].quoteText}</Card.Text>
            <AuthorButton type={"link"} name={quotes[quoteIndex].author}/>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton/>
        <Modal.Body className="quote-card">
            <Container className="font-poppins">
              <h2>{quotes[currentQuote].quoteText}</h2>
            </Container>
            <Container className="mt-3"><strong><AuthorButton type={"link"} name={quotes[currentQuote].author}/></strong></Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            {quotes[currentQuote-1] && 
              <Button className="mb-2" variant={"light"} onClick={handleDecrease} onKeyDown={handleDecrease}><FiArrowLeft/></Button>
            }
            {quotes[currentQuote].topics.length > 0 && 
                <span> 
                    {quotes[currentQuote].topics.map((topic) => (
                        <TopicButton type={"button"} name={topic} key={quotes[currentQuote].quoteText + topic}/>
                    ))}
                </span>
            }
            {quotes[currentQuote+1] && 
              <Button className="mb-2" variant={"light"} onClick={handleIncrease} onKeyUp={handleIncrease}><FiArrowRight/></Button>
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
      </Modal>
    </>
  )}
  else return(<p>Loading...</p>)
}

export default QuoteCard;