import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";

import { Container, Card, Button, Col, Row } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <MetaTags>
          <title>1001 Nuggets - Sign Up</title>
      </MetaTags>
          <Card>
            <Card.Header><Link className="link-theme" to={`/`}>Home</Link> {`>`} Create Account {`(`} <Link className="link-theme" to={`/login`}>Login?</Link> {`)`}</Card.Header>
              <Card.Body>
                {data ? (
                  <p>Success! You may now head <Link className="link-theme" to="/">back to the homepage.</Link></p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <Row>
                      <Col xs={12} md={6}><input className="formInput mb-2" placeholder="Your username" name="username" type="text" value={formState.name} onChange={handleChange}/></Col>
                      <Col xs={12} md={6}><input className="formInput mb-2" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange}/></Col>
                      <Col xs={12} md={6}><input className="formInput mb-2" placeholder="Your password" name="password" type="password" value={formState.password} onChange={handleChange}/></Col>
                      <Col xs={12} md={6}><Button variant={"theme"} className="btn-block" type="submit">Submit</Button></Col>
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

export default Signup;