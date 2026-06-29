import React from "react";

import { Card, Row, Col } from "react-bootstrap";

function HomePagePopularAuthorWidget() {
    const popularAuthors = [
        {name: "Author 1", realID: "author1"},
        {name: "Author 2", realID: "author2"},
        {name: "Author 3", realID: "author3"},
        {name: "Author 4", realID: "author4"},
        {name: "Author 5", realID: "author5"},
        {name: "Author 6", realID: "author6"},
        {name: "Author 7", realID: "author7"},
        {name: "Author 8", realID: "author8"},
        {name: "Author 9", realID: "author9"},
        {name: "Author 10", realID: "author10"},
        {name: "Author 11", realID: "author11"},
        {name: "Author 12", realID: "author12"},
        {name: "Author 13", realID: "author13"},
        {name: "Author 14", realID: "author14"},
        {name: "Author 15", realID: "author15"},
        {name: "Author 16", realID: "author16"},
        {name: "Author 17", realID: "author17"},
        {name: "Author 18", realID: "author18"},
        {name: "Author 19", realID: "author19"},
        {name: "Author 20", realID: "author20"},
        {name: "Author 21", realID: "author21"},
        {name: "Author 22", realID: "author22"},
        {name: "Author 23", realID: "author23"},
        {name: "Author 24", realID: "author24"},
    ]

    const listLength = popularAuthors.length;

    const chunk = Math.ceil(listLength / 12);

    const list1 = popularAuthors.slice(0, chunk);
    const list2 = popularAuthors.slice(chunk, 2 * chunk);
    const list3 = popularAuthors.slice(2 * chunk, 3 * chunk);
    const list4 = popularAuthors.slice(3 * chunk, 4 * chunk);
    const list5 = popularAuthors.slice(4 * chunk, 5 * chunk);
    const list6 = popularAuthors.slice(5 * chunk, 6 * chunk);
    const list7 = popularAuthors.slice(6 * chunk, 7 * chunk);
    const list8 = popularAuthors.slice(7 * chunk, 8 * chunk);
    const list9 = popularAuthors.slice(8 * chunk, 9 * chunk);
    const list10 = popularAuthors.slice(9 * chunk, 10 * chunk);
    const list11 = popularAuthors.slice(10 * chunk, 11 * chunk);
    const list12 = popularAuthors.slice(11 * chunk, 12 * chunk);

    return (
        <Card className="my-4">
            <Card.Body>
                <Card.Text>
                    Explore popular authors and discover their quotes in the 1001 Nuggets collection.
                </Card.Text>
                
                {/* Small View */}
                <Row className="d-flex d-md-none">
                    <Col xs={6}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col xs={6}>
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>

                {/* Medium View */}
                <Row className="d-none d-md-flex d-lg-none">
                    <Col md={4}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col md={4}>
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col md={4}>
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>

                {/* Large View */}
                <Row className="d-none d-lg-flex">
                    <Col lg={3}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default HomePagePopularAuthorWidget;