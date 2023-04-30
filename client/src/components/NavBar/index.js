import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

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
                        <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        {/* <Row className="w-100 align-items-center">
                            <Col xs={2}>
                                
                            </Col>
                            <Col>
                                <span className="text-white">Topics</span>
                            </Col>
                            <Col>
                                <span className="text-white">Nuggets</span>
                            </Col>
                            <Col> 
                                <span className="text-white">Some People</span>
                            </Col>
                            <Col>
                                <Form className="ms-auto" onSubmit={this.handleSearch}>
                                    <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                    <input type="submit" className="btn btn-theme" value="Submit"/>
                                </Form>
                            </Col>
                        </Row> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>Topics</Nav.Link>
                                <Nav.Link>Nuggets</Nav.Link>
                                <Nav.Link>People</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Form onSubmit={this.handleSearch}>
                                    <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                    <input type="submit" className="btn btn-theme" value="Submit"/>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;