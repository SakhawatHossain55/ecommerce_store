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
      <div className="product__detail-page-title">
        <Container>
          <div className="d-flex  justify-content-between py-3 align-items-center">
            <h2>Cart</h2>
            <ul className="d-flex list-unstyled ">
              <li>
                <a className="product__detail-border-bottom" href="/">
                  Home
                </a>
              </li>
              <li>| cart</li>
            </ul>
          </div>
        </Container>
      </div>
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
            <div>
              <Col md={7} className="d-flex">
                <input type="text" placeholder="Coupon code" />
                <button>ApplyCoupon</button>
              </Col>
            </div>
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
            <button className="btn-brand">
              <a href="#">Proceed to Checkout</a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartProduct;
