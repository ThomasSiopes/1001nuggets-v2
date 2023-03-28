import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

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
                <Navbar variant="dark" expand="md" className="py-0 mb-3">
                    {/* <Container>
                        <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="me-3 d-none d-md-block" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        <Navbar id="basic-navbar-nav" className="text-center">
                            <Nav className="mx-auto ms-md-0 me-md-auto">
                                <span className="hoverable me-1"><Link id="nav-topics" className="nav-link" to={`/topics`}><strong>Topics</strong></Link></span>
                                <span className="hoverable me-1"><Link id="nav-collections" className="nav-link" to={`/collections`}><strong>Collections</strong></Link></span>
                            </Nav>
                            <Form onSubmit={this.handleSearch} className="d-block align-items-center justify-content-center">
                                <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                <input type="submit" className="btn btn-theme" value="Submit"/>
                            </Form>
                        </Navbar>
                    </Container> */}
                    <Container>
                        <Link className="navbar-brand" to={`/`}><img id="nav-icon" className="me-3 d-none d-md-block" src="/assets/images/thumbnails/background-copy.png" alt="Logo"/></Link>
                        <Navbar id="basic-navbar-nav" className="text-center">
                            <div className="row">
                                <Nav className="col-xs-12 col-md-7 justify-content-center">
                                    <span className="hoverable me-1"><Link id="nav-topics" className="nav-link" to={`/topics`}><strong>Topics</strong></Link></span>
                                    <span className="hoverable me-1"><Link id="nav-collections" className="nav-link" to={`/collections`}><strong>Collections</strong></Link></span>
                                </Nav>
                                <div className="col-xs-12 col-md-5 align-items-center justify-content-center">
                                    <Form onSubmit={this.handleSearch}>
                                        <input type="text" id="searchTerm" placeholder="Search..." className="me-2" onChange={this.handleChange}></input>
                                        <input type="submit" className="btn btn-theme" value="Submit"/>
                                    </Form>
                                </div>
                            </div>
                        </Navbar>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;