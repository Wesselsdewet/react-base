import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const NavTabsJustified = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Tabs defaultActiveKey="tab2" id="nav-tabs-justified" className="mb-3" justify>
            <Tab eventKey="tab1" title="Tab 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
                Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam
                tincidunt, eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
              </p>
            </Tab>
            <Tab eventKey="tab2" title="Tab 2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
                Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam
                tincidunt, eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
              </p>
            </Tab>
            <Tab eventKey="tab3" title="Tab 3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum et lacus ac dapibus. Ut ornare blandit tellus vitae vulputate. Curabitur at orci velit.
                Vestibulum eget mi sit amet mi sodales hendrerit. Aenean finibus lacinia tortor non ultrices. Quisque vehicula ex dui, eu eleifend augue lacinia ac. Etiam
                tincidunt, eros et eleifend cursus, urna massa hendrerit odio, laoreet tincidunt diam odio sed massa.
              </p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default NavTabsJustified;
