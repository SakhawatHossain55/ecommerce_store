import React from 'react';
import { Col } from 'react-bootstrap';
import { IProduct } from 'type';
import { AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

interface IProp {
  product: IProduct;
}

const Product = ({ product }: IProp) => {
  console.log(product);

  const { title, image, price, id } = product;
  const history = useHistory();
  const handleProductClick = () => {
    history.push(`/products/${id}`);
  };

  return (
    <>
      <Col className="pb-3" md={4}>
        <div
          onClick={handleProductClick}
          className="border p-3 rounded shadow-sm product__items h-100"
        >
          <img className="rounded bg-white mb-3" src={image} alt="" />
          <h3>{title}</h3>
          <ul className="list-unstyled d-flex">
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
            <li>
              <AiFillStar />
            </li>
          </ul>
          <p>${price}</p>
        </div>
      </Col>
    </>
  );
};

export default Product;
