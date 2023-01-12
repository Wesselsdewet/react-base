import React from "react";
import { Container, Row } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductList = (props) => {
  return (
    <Container className="mb-5">
      <Row>
          {props.products.map((product) => (
            <ProductCard key={product.id} title={product.title} releaseDate={product.releaseDate} openingText={product.openingText} />
          ))}
      </Row>
    </Container>
  );
};

export default ProductList;
