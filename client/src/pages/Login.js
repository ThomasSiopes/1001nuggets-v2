import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import MetaTags from 'react-meta-tags';

import { Container, Card, Button, Col, Row } from 'react-bootstrap';

import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Container>
      <MetaTags>
          <title>1001 Nuggets - Sign Up</title>
      </MetaTags>
        <Card>
          <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Login {`(`} <Link className="link-theme" to={`/signup`}>Create Account?</Link> {`)`}</Card.Header>
            <Card.Body>
              {data ? (
                <p>Success! You may now head <Link className="link-theme" to="/">back to the homepage.</Link></p>
              ) : (
                <form onSubmit={handleFormSubmit} className="d-flex flex-column align-center">
                  <Row>
                    <Col xs={12} md={6}><input className="formInput mb-2" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange}/></Col>
                    <Col xs={12} md={6}><input className="formInput mb-2" placeholder="Your password" name="password" type="password" value={formState.password} onChange={handleChange}/></Col>
                    <Col xs={12} ><Button variant={"theme"} className="btn-block" type="submit">Submit</Button></Col>
                  </Row>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
          </Card.Body>
        </Card>
    </Container>
  );
};

export default Login;