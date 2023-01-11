import React from "react";
import PageHeaderBanner from "../components/banners/PageHeaderBanner";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/forms/ContactForm";

const ContactPage = () => {
  return (
    <div id="contact-us">
      <PageHeaderBanner />
      <Container className="mb-4">
        <Row>
          <Col md={12} className="mb-4">
            <h2 className="text-center">The Contact Page</h2>
          </Col>

          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
              Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam tincidunt,
              eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
            </p>
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
