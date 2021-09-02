import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { useHistory } from 'react-router-dom';

const HeaderMiddle = () => {
  const cart = useSelector((state: AppState) => state.cart);

  const history = useHistory();
  const handleCartClick = () => {
    history.push('/cartProduct');
  };
  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <div className="header__middle">
      <Container>
        <div className="d-flex align-items-center gap-3 py-3">
          <h1>NAME</h1>
          <InputGroup>
            <FormControl
              className="border border-primary"
              placeholder="Search hear...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <BiSearch className="text-white mx-3" />
            </Button>
          </InputGroup>
          <span
            onClick={handleCartClick}
            className="header__middle-icons d-flex align-items-center"
          >
            <FaShoppingCart />
          </span>
          <span className="badge bg-primary">{cart.length}</span>
          <span
            onClick={handleLoginClick}
            className="header__middle-icons d-flex align-items-center"
          >
            <FiUser />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMiddle;
