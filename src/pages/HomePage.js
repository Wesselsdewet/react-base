import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeaderBanner from "../components/banners/PageHeaderBanner";
import ContentCards from "../components/cards/ContentCards";
import BootstrapCarousel from "../components/carousels/BootstrapCarousel";
import SimpleSlider from "../components/carousels/SlickSlider";
import ContactForm from "../components/forms/LoginForm";

import ContentModal from "../components/modals/Modal";
import NavTabsJustified from "../components/tabs/NavTabsJustified";
import NavTabsSideNav from "../components/tabs/NavTabsSideNav";

const Home = () => {
  return (
    <div id="home">
      <PageHeaderBanner />
      <Container className="mb-4">
        <Row>
          <Col>
            <h2 className="text-center">The Home Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
              Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam tincidunt,
              eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
            </p>

            <ContentModal />
          </Col>
        </Row>
      </Container>

      {/* Sample Carousel START */}
      <Container className="mb-5">
        <Row>
          <Col>
            <BootstrapCarousel />
          </Col>
        </Row>
      </Container>
      {/* Sample Carousel END */}

      {/* Sample Cards START */}
      <ContentCards />
      {/* Sample Cards END */}

      {/* NavTabs START */}
      <NavTabsJustified />
      {/* NavTabs END */}

      {/* NavTabsSideNav START */}
      <NavTabsSideNav />
      {/* NavTabsSideNav END */}

      {/* Contact Form START */}
      <ContactForm />
      {/* Contact Form END */}

      <SimpleSlider />
    </div>
  );
};

export default Home;
