import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <div className="header__top py-2">
      <Container className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsCheck />
          <span>Free shipping on all orders over $50</span>
        </div>
        <div>
          <span>
            <Link to="#">Login </Link>
          </span>
          Or
          <span>
            <Link to="#"> Register</Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
