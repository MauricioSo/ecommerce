import React, { useEffect, useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";

import { loginUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const styleContainer = {
    height: "100vh",
    maxWidth: "500px"
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userLogin;
  const submitHandler = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  return (
    <Container className="my-4 " style={styleContainer}>
      <h2 className="mb-3 mx-auto">Login</h2>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {error && <div>{error}</div>}
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
          not registered? click <Link to="/register">here</Link> to register
        </p>
        <Button variant="primary" className="my-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
