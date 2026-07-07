import React, {useMemo, useState, useEffect} from "react";
// import LoadingOverlay from "../components/LoadingOverlay";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

import { QUERY_AUTHOR_REALID } from "../utils/queries";
import shuffle from "../utils/shuffle";

const QuoteCard = React.lazy(() => import("../components/QuoteCard"));

const QUOTES_PER_PAGE = 30;

function getPageNumbers(current, total, siblingCount) {
    const totalNumbers = siblingCount * 2 + 5; // first + last + current + 2 siblings + wiggle room
    if (total <= totalNumbers) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(current - siblingCount, 1);
    const rightSibling = Math.min(current + siblingCount, total);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < total - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
        const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
        return [...leftRange, "ellipsis", total];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
        const rightCount = 3 + siblingCount * 2;
        const rightRange = Array.from({ length: rightCount }, (_, i) => total - rightCount + i + 1);
        return [1, "ellipsis", ...rightRange];
    }

    const middleRange = Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i);
    return [1, "ellipsis", ...middleRange, "ellipsis", total];
}

function Author () {
    const { authorRealId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_REALID, {
        variables: {authorRealId: authorRealId}, fetchPolicy: "cache-and-network"
    });

    const [page, setPage] = useState(1);

    // Fewer sibling page numbers on narrow screens so the bar never overflows
    const [isSmallScreen, setIsSmallScreen] = useState(
        () => typeof window !== "undefined" && window.innerWidth < 576
    );
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 575.98px)");
        const handleChange = (e) => setIsSmallScreen(e.matches);
        handleChange(mql);
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
    }, []);

    // Reset back to page 1 whenever we navigate to a different author
    useEffect(() => {
        setPage(1);
    }, [authorRealId]);

    // Shuffle once per author dataset so the order stays stable across page changes
    const shuffledIndexList = useMemo(() => {
        const quotes = data?.authorR.quotes;
        if(!quotes) return [];
        return shuffle(quotes.map((_, i) => i));
    }, [data]);

    const totalQuotes = shuffledIndexList.length;
    const totalPages = Math.max(1, Math.ceil(totalQuotes / QUOTES_PER_PAGE));

    const { list1, list2, list3a, list3b, newIndexOrder } = useMemo(() => {
            if(!shuffledIndexList.length) return { list1:[], list2:[], list3a:[], list3b:[], newIndexOrder:[] };

            const start = (page - 1) * QUOTES_PER_PAGE;
            let indexList = shuffledIndexList.slice(start, start + QUOTES_PER_PAGE);
    
            let result = [];
            for(let n = 3; n > 0; --n) {
                result.push(indexList.splice(0, Math.ceil(indexList.length / n)));
            }
    
            const list1 = result[0];
            const list2 = result[2];
            const middleIndex = Math.ceil(result[1].length / 2);
            const list3a = result[1].splice(0, middleIndex);
            const list3b = result[1].splice(-middleIndex);
            const newIndexOrder = [...list1, ...list3a, ...list3b, ...list2];
    
            return{ list1, list2, list3a, list3b, newIndexOrder };
        }, [shuffledIndexList, page]);

    const goToPage = (newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if(!authorRealId || authorRealId === null || authorRealId === "undefined") return <Navigate to={`/`}/>;

    if(!loading && !data) return <Navigate to="/404error" replace />;

    const author = data?.authorR;

    let extraAuthors = null;
    if(author?.relatedAuthors?.[0]) extraAuthors = author.relatedAuthors;

    return (
        <>
        {/* <LoadingOverlay show={loading && !data} /> */}
        {author && <HelmetProvider>
        <Container className="pt-3 mainBody">
            <Helmet>
                <title>1001 Nuggets - {author.name}</title>
                <meta name="description" content={`Read quotes by ${author.name} on 1001 Nuggets.`} />
                <meta property="og:title" content={`1001 Nuggets - ${author.name}`} />
                <meta property="og:description" content={`Read quotes by ${author.name} on 1001 Nuggets.`} />
                <meta property="og:url" content={`https://1001nuggets.com/author/${authorRealId}`} />
                <link rel="canonical" href={`https://1001nuggets.com/author/${authorRealId}`} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": author.name,
                    "url": `https://www.1001nuggets.com/author/${authorRealId}`,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://www.1001nuggets.com/author/${authorRealId}`
                    }
                })}</script>
            </Helmet>
            <Card bg={"transparent"} border={"none"}>
                <Card.Header className="bg-light rounded"><Link className="link-theme" to={`/`}>Home</Link> {`>`} <Link className="link-theme" to={`/authors`}>Authors</Link> {`>`} {author.name}</Card.Header>
                <Card.Body bg={"transparent"}>
                    {totalPages > 1 &&
                        <Pagination className="justify-content-center mb-4 flex-wrap" size="md">
                        {/* <Pagination.First onClick={() => goToPage(1)} disabled={page === 1} />
                        <Pagination.Prev
                            onClick={() => goToPage(Math.max(1, page - 1))}
                            disabled={page === 1}
                        /> */}
                        {getPageNumbers(page, totalPages, isSmallScreen ? 2 : 3).map((p, i) =>
                            p === "ellipsis"
                                ? <Pagination.Ellipsis key={`ellipsis-${i}`} disabled />
                                : <Pagination.Item key={p} active={p === page} onClick={() => goToPage(p)}>
                                    {p}
                                </Pagination.Item>
                        )}
                        {/* <Pagination.Next
                            onClick={() => goToPage(Math.min(totalPages, page + 1))}
                            disabled={page === totalPages}
                        />
                        <Pagination.Last onClick={() => goToPage(totalPages)} disabled={page === totalPages} /> */}
                        </Pagination>
                    }

                    <Row>
                         {/* First Quote Column */}
                         <Col xs={12} md={6} lg={4}>
                            {list1 && 
                                <Row>
                                    {list1.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {
                                list3a &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                        </Col>

                        {/* Middle Quote Column */}
                        <Col lg={4} className="d-none d-lg-block">
                            {list3a && 
                                <Row>
                                    {list3a.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list3b && 
                                <Row>
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                        </Col>
                        
                        {/* Last Quote Column */}
                        <Col xs={12} md={6} lg={4}>
                            {
                                list3b &&
                                <Row className="d-xs-block d-lg-none">
                                    {list3b.map((index) => (
                                        <Col xs={12} className="mb-3" key={"false" + author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                            {list2 && 
                                <Row>
                                    {list2.map((index) => (
                                        <Col xs={12} className="mb-3" key={author.quotes[index].quoteText}>
                                            <QuoteCard relatedAuthors={extraAuthors} quotes={author.quotes} quoteIndex={index} indexOrder={newIndexOrder}/>
                                        </Col>
                                    ))}
                                </Row>
                            }
                        </Col>
                    </Row>
                    {totalPages > 1 &&
                        <Pagination className="justify-content-center mt-4 flex-wrap" size="md">
                        {/* <Pagination.First onClick={() => goToPage(1)} disabled={page === 1} />
                        <Pagination.Prev
                            onClick={() => goToPage(Math.max(1, page - 1))}
                            disabled={page === 1}
                        /> */}
                        {getPageNumbers(page, totalPages, isSmallScreen ? 2 : 3).map((p, i) =>
                            p === "ellipsis"
                                ? <Pagination.Ellipsis key={`ellipsis-${i}`} disabled />
                                : <Pagination.Item key={p} active={p === page} onClick={() => goToPage(p)}>
                                    {p}
                                </Pagination.Item>
                        )}
                        {/* <Pagination.Next
                            onClick={() => goToPage(Math.min(totalPages, page + 1))}
                            disabled={page === totalPages}
                        />
                        <Pagination.Last onClick={() => goToPage(totalPages)} disabled={page === totalPages} /> */}
                        </Pagination>
                    }
                </Card.Body>
            </Card>
        </Container>
        </HelmetProvider>}
        </>
    )
}

export default Author;