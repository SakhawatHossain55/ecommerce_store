import useAsync from 'hooks/useAsync';
import React, { useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import { IProduct } from 'type';
import { FaShoppingCart, FaInstagram } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/actionCreators/cartActions';

interface IParams {
  id: string;
}

const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const getProduct = useCallback(() => {
    return ProductService.getProductByID(id);
  }, [id]);

  const { data, isLoading, isSuccess, isError, error } =
    useAsync<IProduct>(getProduct);
  const { title, image, description, price, category } = (data ||
    {}) as IProduct;

  const dispatch = useDispatch();

  return (
    <div className=" product__detail">
      <div className="product__detail-page-title">
        <Container>
          <div className="d-flex  justify-content-between py-3 align-items-center">
            <h2>Products Details</h2>
            <ul className="d-flex list-unstyled ">
              <li>
                <a className="product__detail-border-bottom" href="/">
                  Home
                </a>
              </li>
              <li>| Products Details</li>
            </ul>
          </div>
        </Container>
      </div>
      <Container>
        <div className="p-4 my-3 bg-white border rounded wrapper">
          {isLoading && <h3>Loading ....</h3>}
          {isSuccess && (
            <Row>
              <Col md={6}>
                <img className="img-fluid" src={image} alt={title} />
              </Col>
              <Col md={6}>
                <h3>{title}</h3>
                <ul className="list-unstyled product__detail-rating d-flex">
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
                <span className="mt-3 product__detail-pricing mb-5">
                  <del>$1500.00</del> ৳ {price}
                </span>
                <button
                  onClick={() => dispatch(addToCart(data as IProduct))}
                  className="btn-brand"
                >
                  <FaShoppingCart />
                  <span className="ms-2">Add to Cart</span>
                </button>
                <p className="mt-5">{category}</p>
                <p>{description}</p>
                <ul className="list-unstyled product__detail-social d-flex gap-2">
                  <p>Share:</p>
                  <li>
                    <GrFacebookOption />
                  </li>
                  <li>
                    <GrTwitter />
                  </li>
                  <li>
                    <GrLinkedinOption />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
              </Col>
            </Row>
          )}
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
