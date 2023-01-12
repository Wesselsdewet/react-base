import React from "react";
import { Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import slideImage from "../../assets/alienware-wallpaper-1920x1080.jpg";

const ProductCard = (props) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={slideImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.releaseDate}</Card.Text>
          <Card.Text>{props.openingText}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
