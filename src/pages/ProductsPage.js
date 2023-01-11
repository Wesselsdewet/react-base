import { Container, Row, Col } from "react-bootstrap";

import PageHeaderBanner from "../components/banners/PageHeaderBanner";
import ContentCards from "../components/cards/ContentCards";

const Products = () => {
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
          <Col md={12}>
            <ContentCards />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
