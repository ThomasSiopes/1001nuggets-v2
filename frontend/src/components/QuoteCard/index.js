import React, { useState } from 'react';
import { Button, Card, Modal, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontSizeChanger  from "react-font-size-changer";

import { FiShare } from "react-icons/fi";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TopicButton from "../TopicButton";
import AuthorButton from "../AuthorButton";

function QuoteCard({quotes, quoteIndex, indexOrder}) {
  const [show, setShow] = useState(false);
  const [currentQuote, setIndex] = useState(quoteIndex);
  const [fontSize, setFont] = useState(24);

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
    setFont(slider.value);
    for(let index of targets) index.style.fontSize = fontSize + "px"
    
  }

  if(quotes) {
    return (
    <div>
      <Card>
        <Card.Body className="quote-card" onClick={handleShow}>
            <strong>
              <Card.Text className="font-poppins text-center">{quotes[quoteIndex].quoteText}</Card.Text>
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
        {/* <FontSizeChanger
          targets={[".quote-modal-text", ".carousel .quote-card .link-theme"]}
          customButtons={{
            up: <FaSearchPlus/>,
            down: <FaSearchMinus/>
          }}
          options ={{
            stepSize: 1,
            range: 7
          }}
        /> */}
        {/* Slider */}
        <input type="range" className="mx-2 slider" min="20" max="50" value={fontSize} id="myRange" onChange={handleFontResize}/>

        <Carousel activeIndex={currentQuote} indicators={false} interval={null} onSelect={handleSelect} touch={true} wrap={false} prevIcon={<MdKeyboardArrowLeft stroke={"black"} fill={"black"}/>} nextIcon={<MdKeyboardArrowRight stroke={"black"} fill={"black"}/>}>
          {indexOrder.map((index) => (
            <Carousel.Item key={quotes[index].quoteText}>
              <Container className="quote-card py-4">
                {/* Quote */}
                <Container className="font-poppins">
                  <strong><p className="quote-modal-text text-center targetText">{quotes[index].quoteText}</p></strong>
                </Container>

                {/* Author */}
                <Container className="mt-3 pe-4 text-end">
                  <strong>
                    {quotes[quoteIndex].author && <AuthorButton type={"link"} name={quotes[index].author}/>}
                  </strong>
                </Container>
              </Container>

              {/* Topic */}
              {quotes[index].topics && quotes[index].topics.length > 0 && <Modal.Footer className="justify-content-center align-items-center"> 
                  <span className="text-center"> 
                      {quotes[index].topics.map((topic) => (
                          <TopicButton type={"button"} name={topic} theme={"weak"} key={quotes[index].quoteText + topic}/>
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