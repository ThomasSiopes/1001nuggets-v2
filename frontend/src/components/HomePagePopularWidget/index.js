import React from "react";

import { Card, Col, Row, Button } from "react-bootstrap";

function List({inputList, type}) {       return (
        <Col>
            <p>
                {type === "Proverb" ? `1001 Proverbs` : `Popular ${type}s`}
            </p>
                {inputList.map((item, index) => (
                    <p className="mb-0" key={index}>
                        <a href={`/${type === "Proverb" ? "Author" : type}/${item.realID}`}>{item.name}</a>
                    </p>
                ))}
                {type === "Author" || type === "Topic" ? <Button variant={"theme"} className="my-2" href={`/${type}s`}>More {type}s</Button> : null}
        </Col>
    )
}

function HomePagePopularWidget() {
    const authorList = [
        {name: "Mark Twain", realID:"MarkTwain"},
        {name: "Albert Einstein", realID:"Albert-Einstein"},
        {name: "Winston Churchill", realID:"Winston-Churchill"},
        {name: "Elon Musk", realID:"ElonMusk"},
        {name: "William Shakespeare", realID:"William-Shakespeare"},
        {name: "Mahatma Gandhi", realID:"MahatmaGandhi"},
        {name: "Henry Ford", realID:"Henry-Ford"},
        {name: "Ralph Waldo Emerson", realID:"Ralph-Waldo-Emerson"},
        {name: "Benjamin Franklin", realID:"Benjamin-Franklin"},
        {name: "Samuel Johnson", realID:"Samuel-Johnson"},
        {name: "Oscar Wilde", realID:"OscarWilde"},
        {name: "Maya Angelou", realID:"MayaAngelou"},
        {name: "George Bernard Shaw", realID:"GeorgeBernardShaw"},
        {name: "Eleanor Roosevelt", realID:"EleanorRoosevelt"},
        {name: "Aristotle", realID:"Aristotle"},
        {name: "Confucius", realID:"Confucius"},
        {name: "Will Rogers", realID:"WillRogers"},
        {name: "Cicero", realID:"Cicero"},
        {name: "Josh Billings", realID:"JoshBillings"},
        {name: "Buddha", realID:"Buddha"},
    ]
    const topicList = [
        {name: "Armchair QBs", realID: "Armchair-QBs"},
        {name: "Business.101", realID: "Business-101"},
        {name: "Critical thinking", realID: "Critical-thinking"},
        {name: "Duty", realID: "Duty"},
        {name: "Experience", realID: "Experience"},
        {name: "Golf", realID: "Golf"},
        {name: "Husbands & Wives", realID: "HusbandsAndWives"},
        {name: "Ivory towers", realID: "Ivory-towers"},
        {name: "Jealousy", realID: "Jealousy"},
        {name: "Know-it-alls", realID: "Know-it-alls"},
        {name: "Louder than words", realID: "Louder-than-words"},
        {name: "Nonconformity", realID: "Nonconformity"},
        {name: "Obstacles", realID: "Obstacles"},
        {name: "Picking your battles", realID: "Picking-your-battles"},
        {name: "Reflection", realID: "Reflection"},
        {name: "Social media", realID: "Social-media"},
        {name: "Theory vs. Practice", realID: "Theory-vs--Practice"},
        {name: "Venturing", realID: "Venturing"},
        {name: "Winners & Losers", realID: "Winners---Losers"},
        {name: "Youth", realID: "Youth"}
    ]
    const proverbList = [
        {name: "African Proverbs", realID: "African-Proverb"},
        {name: "American Proverbs", realID: "American-proverb"},
        {name: "Arabian Proverbs", realID: "Arabian-proverb"},
        {name: "Chinese Proverbs", realID: "Chinese-proverb"},
        {name: "Danish Proverbs ", realID: "DanishProverb"},
        {name: "Dutch Proverbs", realID: "Dutch-proverb"},
        {name: "English Proverbs", realID: "English-proverb"},
        {name: "French Proverbs", realID: "French-proverb"},
        {name: "German Proverbs", realID: "German-proverb"},
        {name: "Greek Proverbs", realID: "Greek-proverb"},
        {name: "Irish Proverbs", realID: "Irish-proverb"},
        {name: "Italian Proverbs", realID: "Italian-proverb"},
        {name: "Japanese Proverbs", realID: "Japanese-proverb"},
        {name: "Jewish Proverbs", realID: "Jewish-proverb"},
        {name: "Latin Proverbs", realID: "Latin-proverb"},
        {name: "Russian Proverbs", realID: "Russian-proverb"},
        {name: "Scottish Proverbs", realID: "Scottish-proverb"},
        {name: "Spanish Proverbs", realID: "Spanish-proverb"},
        {name: "Turkish Proverbs", realID: "Turkish-proverb"},
        {name: "Yiddish Proverbs", realID: "Yiddish-proverb"},
    ]


    return(
        <Card>
            <Card.Body>
                <Row>
                    <List inputList={authorList} type="Author"/>
                    <List inputList={topicList} type="Topic"/>
                    <List inputList={proverbList} type="Proverb"/>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default HomePagePopularWidget;