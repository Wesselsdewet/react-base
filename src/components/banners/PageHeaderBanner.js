import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./PageHeaderBanner.scss";

const PageHeaderBanner = () => {
  return (
    <div className="page-header-banner-background mb-5">
      <Container id="home-page-header-banner" className="h-100">
        <Row className="h-100">
          <Col className="text-center my-auto">
            <h1>{}Page Header Banner</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHeaderBanner;
