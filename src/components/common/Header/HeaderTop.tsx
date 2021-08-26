import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';

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
            <a href="#">Login </a>
          </span>
          Or
          <span>
            <a href="#"> Register</a>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
