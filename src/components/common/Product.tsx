import React from 'react';
import { Col } from 'react-bootstrap';
import { IProduct } from 'type';

interface IProp {
  product: IProduct;
}

const Product = ({ product }: IProp) => {
  const { title } = product;

  return (
    <>
      <Col className="pb-3" md={3}>
        <div className="border h-100">
          <h3>{title}</h3>
        </div>
      </Col>
    </>
  );
};

export default Product;
