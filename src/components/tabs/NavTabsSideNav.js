import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";

const NavTabsSideNav = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
                      Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam
                      tincidunt, eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
                      Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam
                      tincidunt, eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default NavTabsSideNav;
