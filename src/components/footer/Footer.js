import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SocialLinkIcons from "../socials/SocialLinkIcons";

import "./Footer.scss";

const Footer = () => {
  return (
    <Container fluid id="site-footer" className="bg-dark">
      <Row>
        <Col md={4} className="text-center py-5">
          <h3 className="footer-section-title">Footer Col 1</h3>
        </Col>
        <Col md={4} className="text-center py-5">
          <h3 className="footer-section-title">Quick Links</h3>
        </Col>
        <Col md={4} className="text-center py-5">
          <h3 className="footer-section-title">Socials</h3>
          <SocialLinkIcons />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
