import React from "react";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./navbar.css";
import { FormControl } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Link from "react-router-dom/Link";
import { useSelector, useDispatch } from "react-redux";

const Navb = () => {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">
          <Nav.Link>
            <Link className="link-nav" to="/">
              Ecommerce
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="link-nav" to="/collection">
                Collection
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-nav" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-nav" to="/cart">
                Cart
              </Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              {userInfo ? (
                <Link to="/profile">{userInfo.name}</Link>
              ) : (
                <div>
                  <Link to="/login">
                    <Button variant="light">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button style={{ margin: "10px" }} variant="light">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navb;
