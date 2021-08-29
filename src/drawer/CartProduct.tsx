import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { IProduct } from 'type';
import CartItem from './CartItem';

// interface IProp {
//     cart: IProduct
// }

const CartProduct = () => {
  const cart = useSelector((state: AppState) => state.cart);

  return (
    <div className="cart">
      <Container>
        <Row className="py-5">
          <Col md={8} className="cart__product">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              {cart?.map((cartItem: IProduct) => (
                <CartItem cartItem={cartItem} key={cartItem.id} />
              ))}
            </Table>
          </Col>
          <Col md={4} className="cart__pricing bg-white rounded">
            <h3>Cart Totals</h3>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">
                <b>Subtotal</b> <span>${cart.length}</span>
              </li>
              <li className="d-flex justify-content-between">
                <b>Shipping</b> <span>${cart.length}</span>
              </li>
              <li className="d-flex justify-content-between">
                <b>Total</b> <span>${cart.length}</span>
              </li>
              <li className="d-flex justify-content-between">
                <b>Payable Total</b> <span>${cart.length}</span>
              </li>
            </ul>
            <button>Proceed to Checkout</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartProduct;
