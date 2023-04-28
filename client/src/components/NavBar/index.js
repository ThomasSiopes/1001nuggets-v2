import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Container, Form, Row, Col } from "react-bootstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', go: false };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value}); 
    }
    
    handleSearch(event) {
      event.preventDefault();
      this.setState({go: true});
    }

    render() {
        if(this.state.go) {
            this.setState({go: false});
            return <Redirect to={`/search/${this.state.value}`}/>
        }
        else {        
            return(
                <Navbar variant="dark" expand="md" className="py-3 mb-3">
                    <Container>
                        <Row className="w-100">
                            <Col xs={2}>
                                <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="me-3" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                            </Col>
                            <Col xs={10} className="align-items-center justify-content-center">
                                <Form onSubmit={this.handleSearch}>
                                    <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                    <input type="submit" className="btn btn-theme" value="Submit"/>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;