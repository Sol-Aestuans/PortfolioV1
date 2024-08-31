import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socials from "./Home/Socials";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Socials />
      <Row className="copyright">
        <Col md="4" className="footer-copyright">
          <p>Copyright © {year} SB</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
