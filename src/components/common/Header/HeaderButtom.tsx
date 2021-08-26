import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';

const HeaderButtom = () => {
  return (
    <div className="header__buttom">
      <Navbar variant="light">
        <Container>
          <Navbar.Brand className="header__buttom-Categories px-5" href="#">
            <BiMenu /> All Categories
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link active href="#home">
              Home
            </Nav.Link>
            <Nav.Link active href="#features">
              Features
            </Nav.Link>
            <Nav.Link active href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link active href="tel:6545676789">
              Hotline:(+1) 654 567 – 6789
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderButtom;
