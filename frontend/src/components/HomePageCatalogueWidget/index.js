import React from "react";

import { Card, Button } from "react-bootstrap";

function HomePageCatalogueWidget() {
    return(
        <Card>
            <Card.Body>
                <p><Button variant={"theme"} className="btn-block my-2 py-3" href="/author-catalogue">Author Catalogue</Button></p>
                <p><Button variant={"theme"} className="btn-block my-2 py-3" href="/quote-catalogue">Quote Catalogue</Button></p>
            </Card.Body>
        </Card>
    )
}

export default HomePageCatalogueWidget;