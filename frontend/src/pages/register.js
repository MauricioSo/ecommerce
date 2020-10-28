import React, { useEffect, useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";

import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./login.css";

const Register = () => {
  const styleContainer = {
    height: "100vh",
    maxWidth: "500px"
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const submitHandler = e => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
  };
  console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      setTimeout(() => history.push("/login"), 3000);
    }
  }, [userInfo]);

  return (
    <Container className="my-4 mw-" style={styleContainer}>
      <h2 className="mb-3 mx-auto">Register</h2>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {error && <div>{error}</div>}
          {userInfo && (
            <Spinner animation="border" role="status">
              <span className="sr-only">redicting to login</span>
            </Spinner>
          )}
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            className="mb-4"
            onChange={e => setName(e.target.value)}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <p>
          Already register? click <Link to="/login">here</Link> to login
        </p>
        <Button variant="primary" className="my-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
