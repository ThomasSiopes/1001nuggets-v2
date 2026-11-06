import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Card } from "react-bootstrap";

function AboutUs () {
    return (
        <HelmetProvider>
            <Container className="pt-3 mb-4">
                <Helmet>
                    <title>About Us</title>
                    <meta name="description" content="Learn more about our company and mission." />
                </Helmet>
                <Card>
                    <Card.Header className="bg-light rounded"><Link className="link-theme" to={`/`}>Home</Link> {`>`} About Us</Card.Header>
                    <Card.Body>
                        <Container>
                            <h1 id="about-us">About Us</h1>
                            <p>1001 Nuggets is a quotation site owned by Graffitan Publishing LLC, with over 20,000 quotes, hand-picked for their wisdom, inspiration, profundity, or all-around quality. Our database is organized into topics, collections, and other subdivisions to help you find exactly what you're looking for and provide a rich and intuitive browsing experience for quote enthusiasts.</p>
                            <p>Quotes from history's most profound thinkers and leaders can be found here; from philosophers to political figures, and from scientists to artists. [WIP]</p>
                            <p>Thank you for visiting our website. We wish you luck in finding anything you're looking for here.</p>
                            
                            <h1 id="contact">Contact Us</h1>
                            <p>You can contact us at peters@graffitian.com, or by visiting <Link to={"https://www.graffitian.com"}>our website</Link>.</p>
                            
                            <h1 id="privacy-policy">Privacy Policy</h1>
                            <p>1001 Nuggets is owned and operated by Graffitian Publishing LLC. We at Graffitian Publishing respect your privacy; for that reason, we do not collect <i>any</i> information from you, and do not require an account or any personal data to access any of our resources. [WIP]</p>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </HelmetProvider>
    )
}

export default AboutUs