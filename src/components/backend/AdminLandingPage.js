import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";

import AddProductForm from "../forms/AddProductForm";
import ProductsList from "../cards/ProductsList";

const AdminLandingPage = () => {
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

  async function addProductHandler(product) {
    const response = await fetch("https://react-http-7f255-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

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
    <div id="admin-landing-page">
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">The Admin Landing Page</h2>
              <AddProductForm onAddProduct={addProductHandler} />
            </Col>
          </Row>
        </Container>
        {content}
      </React.Fragment>
    </div>
  );
};

export default AdminLandingPage;
