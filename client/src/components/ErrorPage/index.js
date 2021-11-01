import React from "react"
import { Container } from "react-bootstrap";

function ErrorPage () {
    return(
        <Container>
            <h4 className="pt-3 text-center">404 Error: Page not found.</h4>
            <h4 className="text-center">Something must've gone wrong!</h4>
        </Container>
    )
}

export default ErrorPage;