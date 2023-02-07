import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form } from "react-bootstrap";

import { FiSearch } from "react-icons/fi";

// import Auth from "../../utils/auth";

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
                <Navbar bg="red" variant="dark" expand="md" className="mb-3">
                    <Container>
                        <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="me-3 d-none d-md-block" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                            <Nav className="me-auto py-2">
                                <span className="hoverable me-1 d-inline d-md-none"><Link id="nav-authors" className="nav-link" to={`/`}><strong>Home</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-authors" className="nav-link" to={`/authors`}><strong>Authors</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-topics" className="nav-link" to={`/topics`}><strong>Topics</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-collections" className="nav-link" to={`/collections`}><strong>Collections</strong></Link></span>
                                
                                {/* {Auth.loggedIn() ?
                                    <strong><NavDropdown className="hoverable me-1" title="Account ">
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item onClick={Auth.logout}>Logout</NavDropdown.Item>
                                    </NavDropdown></strong>
                                    :
                                    <strong><NavDropdown className="hoverable me-1" title="Account ">
                                        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                    </NavDropdown></strong>
                                } */}
                            </Nav>
                            <Form onSubmit={this.handleSearch} className="d-flex align-items-center justify-content-center">
                                <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                <input type="submit" className="btn btn-theme" value="Submit"/>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;