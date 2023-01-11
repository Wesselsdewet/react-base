import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import "./SlickSlider.scss"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false
    };
    return (
      <Container className="mb-5">
        <Row>
          <Col>
            <Slider {...settings}>
              <div className="text-center border pt-3">
                <h3>1</h3>
              </div>
              <div className="text-center border pt-3">
                <h3>2</h3>
              </div>
              <div className="text-center border pt-3">
                <h3>3</h3>
              </div>
              <div className="text-center border pt-3">
                <h3>4</h3>
              </div>
              <div className="text-center border pt-3">
                <h3>5</h3>
              </div>
              <div className="text-center border pt-3">
                <h3>6</h3>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    );
  }
}
