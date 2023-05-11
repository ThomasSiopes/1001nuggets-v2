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
                        <Link className="navbar-brand me-0 p-0" to={`/`}><img id="nav-icon" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="mx-2">
                            <Nav className="me-auto text-center">
                                <Nav.Link href="/topics">Topics</Nav.Link>
                                <Nav.Link href="/collections">Collections</Nav.Link>
                                <Nav.Link href="/somePeople">People</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Form className="text-center mt-2" onSubmit={this.handleSearch}>
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