import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../actions/productActions";
import {
  Container,
  Row,
  Col,
  Image,
  Spinner,
  Button,
  Card
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  const productFetched = useSelector(state => state.productData);
  const { loading, error, product } = productFetched;
  const handleAddToCart = () => {
    dispatch(addToCart(productId, quantity));
  };
  const handleOnChange = e => {
    setQuantity(e.target.value);
  };

  return (
    <Container className="mx-5  my-5 py-5">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : error ? (
        <div>{error}</div>
      ) : product ? (
        <>
          <Row>
            <Col md={5} lg={3}>
              <Image src={`${process.env.PUBLIC_URL}/${product.image}`} />
            </Col>
            <Col md={7} lg={9}>
              <h2>{product.name}</h2>

              <p>{product.description}</p>
              <br />
              <p>price:{product.price}</p>
              <br />
              <label>
                quantity
                <input
                  value={quantity}
                  type="text"
                  onChange={handleOnChange}
                  style={{ width: "20px" }}
                ></input>
              </label>
              <br />
              <Button
                className="mt-2"
                variant="success"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row>
            <h4 className="my-5 pt-5 mx-auto">Reviews</h4>

            {product.reviews.map(el => (
              <Col lg={12}>
                <Card className="border-0">
                  <Card.Body className="d-flex ">
                    <Card.Title className="mx-2">{el.name}:</Card.Title>
                    <Card.Text className="mx-2">{el.comment}</Card.Text>
                    <Card.Text> and rating is {el.rating}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div>product not found</div>
      )}
    </Container>
  );
};

export default SingleProduct;
