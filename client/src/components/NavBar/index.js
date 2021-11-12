import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', go: false };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value}); 
    }
    
    handleSubmit(event) {
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
                        {/* <Link className="navbar-brand" to={`/`}><strong>1001 Nuggets</strong></Link> */}
                        <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="me-3" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                            <Nav className="me-auto">
                                <span className="hoverable me-1"><Link id="nav-home" className="nav-link" to={`/`}><strong>Home</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-authors" className="nav-link" to={`/authors`}><strong>Authors</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-topics" className="nav-link" to={`/topics`}><strong>Topics</strong></Link></span>
                            </Nav>
                            <Form onSubmit={this.handleSubmit}>
                                <input type="text" id="searchTerm" placeholder="Search..." className="me-2 my-2" onChange={this.handleChange}></input>
                                <input type="submit" value="Submit"></input>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;