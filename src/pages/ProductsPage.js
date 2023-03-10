import { useState, useEffect, useCallback } from "react";

import { Container, Row, Col } from "react-bootstrap";

import PageHeaderBanner from "../components/banners/PageHeaderBanner";
import ProductsList from "../components/cards/ProductsList";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-7f255-default-rtdb.firebaseio.com/products.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setProduct(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductHandler();
  }, [fetchProductHandler]);

  let content = <p>Found no products.</p>;

  if (products.length > 0) {
    content = <ProductsList products={products} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div id="welcome">
      <PageHeaderBanner />
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            <h2 className="text-center">The Products Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
              Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam tincidunt,
              eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
            </p>
          </Col>
          <Col md={12}>{content}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
