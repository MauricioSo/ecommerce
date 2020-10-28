import React from "react";
import { useSelector } from "react-redux";

import { Table, Button, Container } from "react-bootstrap";

const CartPage = () => {
  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const handleCheckOut = () => {};

  return (
    <Container className="min-vh-100">
      <h2 className="text-center my-4">Cart</h2>
      {cartItems.length === 0 ? (
        <div className="font-weight-bold my-4">no products</div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>products</th>
              <th>quantity</th>
              <th>price</th>
              <th>subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-weight-bold ">
                {" "}
                total:
                {cartItems.reduce((tot, cur) => {
                  return tot + cur.price * cur.quantity;
                }, 0)}
              </td>
            </tr>
          </tbody>
        </Table>
      )}

      <Button variant="success" onClick={handleCheckOut}>
        Check Out
      </Button>
    </Container>
  );
};

export default CartPage;
