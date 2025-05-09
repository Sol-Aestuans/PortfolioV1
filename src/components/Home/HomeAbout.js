import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import laptopImg from "../../Assets/about.png";

function HomeAbout() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="blue">ME</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Technical <strong className="blue">Skillset </strong>
          </h1>

          <Techstack />
      </Container>
    </Container>
  );
}
export default HomeAbout;
