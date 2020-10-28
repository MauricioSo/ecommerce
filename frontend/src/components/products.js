import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { fetchProducts } from "../actions/productActions";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./products.css";
const ProductsGrid = () => {
  const productsFetched = useSelector(state => state.productsData);
  const dispatch = useDispatch();
  let history = useHistory();
  const { loading, products, error } = productsFetched;
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products-grid">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container style={{ maxWidth: "80%" }}>
          <Row>
            {products ? (
              products.map(el => (
                <Col md={6} lg={3}>
                  <Card
                    className="mx-3 my-3 border-0"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img
                      className="img-product"
                      variant="top"
                      src={`${process.env.PUBLIC_URL}/${el.image}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/${el._id}`}> {el.name} </Link>
                      </Card.Title>
                      <Card.Text>{el.description}</Card.Text>
                      <Card.Text>{el.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div>no products to show</div>
            )}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductsGrid;
