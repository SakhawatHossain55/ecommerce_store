import React from 'react';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Get in Touch</h2>
              <ul className="list-unstyled">
                <li>
                  <span>Address:</span>
                  <a href="#" target="_blank">
                    4848 Hershell Hollow Road Bothell, WA 89076
                  </a>
                </li>
                <li>
                  <span>Phone:</span>
                  <a href="tel:+15143214567">+1 (514) 321-4567</a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto:hello@econix.com">hello@econix.com</a>
                </li>
              </ul>

              <ul className="list-unstyled footer-social d-flex gap-2">
                <li>
                  <a href="#" target="_blank">
                    <GrFacebookOption />{' '}
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <GrTwitter />{' '}
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <GrLinkedinOption />{' '}
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FaInstagram />{' '}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Policies</h2>
              <ul className="quick-links  list-unstyled">
                <li>
                  <a href="#">Shipping And Delivery</a>
                </li>
                <li>
                  <a href="#">Payment Method</a>
                </li>
                <li>
                  <a href="#">How to Shop</a>
                </li>
                <li>
                  <a href="#">Terms And Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Support</h2>
              <ul className="footer__quick-links list-unstyled">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Customer Services</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Help Desk</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Join Our Newsletter</h2>
              <div className="newsletter-item">
                <div className="newsletter-content">
                  <p>Subscribe to the newsletter for all the latest updates</p>
                </div>
                <form className="newsletter-form" data-toggle="validator">
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email address"
                    name="EMAIL"
                  />
                  <button className="btn btn-danger" type="submit">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <div>
            <p className="text-center pt-5 border-top mt-5">
              &copy;{new Date().getFullYear()} E-valy.com Limited. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
