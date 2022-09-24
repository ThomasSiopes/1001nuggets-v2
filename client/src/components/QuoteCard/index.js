import React, { useState } from 'react';
import { Button, Card, Modal, Container } from 'react-bootstrap';

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

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
    console.log("OG: " + quoteIndex);
    console.log("Current: " + currentQuote);
  }

  const handleDecrease =() => {
    setIndex(currentQuote-1);
    console.log("OG: " + quoteIndex);
    console.log("Current: " + currentQuote);
  }

  if(quotes && quotes[quoteIndex] && quotes[currentQuote]) {
    return (
    <>
      <Card>
        <Card.Body onClick={handleShow}>
            <Card.Text className="font-poppins">"{quotes[quoteIndex].quoteText}"</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton/>
        <Modal.Body className="quote-card">
            <Container className="font-poppins">
                <h2>"{quotes[currentQuote].quoteText}"</h2>
            </Container>
            <Container className="mt-3"><strong><AuthorButton type={"link"} name={quotes[currentQuote].author}/></strong></Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
            {quotes[currentQuote-1] && 
              <Button className="mb-2" variant={"light"} onClick={handleDecrease}><strong>{"←"}</strong></Button>
            }
            {quotes[currentQuote].topics.length > 0 && 
                <span>
                    {quotes[currentQuote].topics.map((topic) => (
                        <TopicButton type={"button"} name={topic} key={quotes[currentQuote].quoteText + topic}/>
                    ))}
                </span>
            }
            {quotes[currentQuote+1] && 
              <Button className="mb-2" variant={"light"} onClick={handleIncrease}><strong>{"→"}</strong></Button>
            }
        </Modal.Footer>
      </Modal>
    </>
  )}
  else return(<p>Loading...</p>)
}

export default QuoteCard;