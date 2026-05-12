import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async"

import { Container, Row, Col, Card } from "react-bootstrap";
const TopicNavInst = React.lazy(() => import("../components/TopicNavInst"));

const SCROLL_KEY = 'topicnav-scroll-state';

function Topics () {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const location = useLocation();

    useEffect(() => {
        // Save scroll position while on this page, keyed to this history entry
        const handleScroll = () => {
            sessionStorage.setItem(SCROLL_KEY, JSON.stringify({
                key: location.key,
                scroll: window.scrollY
            }));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Restore scroll only when returning via browser back/forward (same location key)
        const saved = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || 'null');
        if (saved && saved.key === location.key && saved.scroll > 0) {
            const targetY = saved.scroll;
            let attempts = 0;
            const tryScroll = () => {
                window.scrollTo(0, targetY);
                // Retry while page isn't tall enough yet (lazy content still loading)
                if (Math.abs(window.scrollY - targetY) > 50 && attempts < 8) {
                    attempts++;
                    setTimeout(tryScroll, 100);
                }
            };
            setTimeout(tryScroll, 50);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.key]);

    return (
        <HelmetProvider>
        <Container className="pt-3">
            <Helmet>
                <title>1001 Nuggets - Topics</title>
            </Helmet>
            <Row className="justify-content-center navPage-body">
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                {alphabet.map((index) => (
                                    <TopicNavInst key={index} letter={index}/>
                                ))
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-05 p-0 text-center">
                    <Row className="fitter px-0 py-2 ms-0 align-items-center justify-content-center">
                        {alphabet.map((fitterIndex) => (
                            <div className="p-0 mx-0 float-left sidebar-text" key={"fitter" + fitterIndex}><a href={"#" + fitterIndex} className="text-white">{fitterIndex}</a></div>
                        ))
                        }
                    </Row>
                </div>
            </Row>
        </Container>
        </HelmetProvider>
    )
}

export default Topics;