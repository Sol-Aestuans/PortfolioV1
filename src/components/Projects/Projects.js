import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue"> Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mobile clock app"
              description="Built using React for iOS & Android"
              ghLink="https://github.com/Sol-Aestuans/Mobile-clock-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Toy OS"
              description="Built using KPL and Blitz"
              ghLink="https://github.com/Sol-Aestuans/KPL-Blitz-OS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cyber Wargame Engine"
              description="Built using Strapi, Node.js, GraphQl, & Next.js"
              ghLink="https://github.com/Sol-Aestuans/CyberWargame"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Word guessing game"
              description="Multi client game using C and network protocol libraries"
              ghLink="https://github.com/Sol-Aestuans/Multi-client-word-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SURLY relational DB"
              description="Miniature relational DB built using Java"
              ghLink="https://github.com/Sol-Aestuans/Mini-relational-DB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AWS based tic-tac-toe"
              description="Cloud tech..."
              ghLink="https://github.com/Sol-Aestuans/Cloud-tic-tac-toe" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
