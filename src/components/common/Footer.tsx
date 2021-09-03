import React from 'react';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                  <Link to="/" target="_blank">
                    4848 Hershell Hollow Road Bothell, WA 89076
                  </Link>
                </li>
                <li>
                  <span>Phone:</span>
                  <Link to="tel:+15143214567">+1 (514) 321-4567</Link>
                </li>
                <li>
                  <span>Email:</span>
                  <Link to="mailto:hello@econix.com">hello@econix.com</Link>
                </li>
              </ul>

              <ul className="list-unstyled footer-social d-flex gap-2">
                <li>
                  <Link to="/" target="_blank">
                    <GrFacebookOption />{' '}
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <GrTwitter />{' '}
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <GrLinkedinOption />{' '}
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <FaInstagram />{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Policies</h2>
              <ul className="quick-links  list-unstyled">
                <li>
                  <Link to="/">Shipping And Delivery</Link>
                </li>
                <li>
                  <Link to="/">Payment Method</Link>
                </li>
                <li>
                  <Link to="/">How to Shop</Link>
                </li>
                <li>
                  <Link to="/">Terms And Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Returns</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer__widget">
              <h2>Support</h2>
              <ul className="footer__quick-links list-unstyled">
                <li>
                  <Link to="/">My Account</Link>
                </li>
                <li>
                  <Link to="/">Order Tracking</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Customer Services</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Help Desk</Link>
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
