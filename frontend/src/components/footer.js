import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <Container style={{ maxWidth: "70%" }}>
      <Row>
        <Col xs={12} md={6}>
          <ListGroup variant="flush" className="mx-3">
            <ListGroup.Item>
              <h4>Contact</h4>
            </ListGroup.Item>
            <ListGroup.Item>phone: +567 234234234</ListGroup.Item>
            <ListGroup.Item>email: ecommerce@com.com</ListGroup.Item>
            <ListGroup.Item>San Diego 5656</ListGroup.Item>
            <ListGroup.Item>Santiago, Chile</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={12} md={6}>
          <ListGroup variant="flush" className="mx-3">
            <ListGroup.Item>
              <h4>Services</h4>
            </ListGroup.Item>
            <ListGroup.Item>Shop</ListGroup.Item>
            <ListGroup.Item>t-shirt</ListGroup.Item>
            <ListGroup.Item>account</ListGroup.Item>
            <ListGroup.Item>discount</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
