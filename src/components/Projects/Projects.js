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
              description="Developed a dynamic clock app for iOS and Android using React Native. Integrated various APIs to enhance features, including daily quotes, dynamic backgrounds, location-based adjustments, and real-time time updates."
              ghLink="https://github.com/Sol-Aestuans/Mobile-clock-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLITZ OS"
              description="Developed the BLITZ toy Operating System using the low-level C-like Kernel Programming Language (KPL). Implemented essential features such as thread, frame, and process management, along with system call handling."
              ghLink="https://github.com/Sol-Aestuans/KPL-Blitz-OS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cyber Wargame Engine"
              description="Designed, developed, and deployed a prototype game engine on WWU's private cloud in a group of 4. The engine features an extensible backend powered by Strapi headless CMS and Node.js, with GraphQL and Next.js driving the frontend. The game supports two teams of four players competing to uncover and corrupt each other's critical networks."
              ghLink="https://github.com/Sol-Aestuans/CyberWargame"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Word guessing game"
              description="Developed a multi-client word guessing game with intricate logic using the C programming language. Leveraged network protocol libraries, including sockets, for seamless communication between clients and the server."
              ghLink="https://github.com/Sol-Aestuans/Multi-client-word-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Deadwood virtual Boardgame"
              description="Developed a virtual rendition of the board game Deadwood using Java and Java Swing. Implemented complex game logic and applied object-oriented design principles such as inheritance, encapsulation, and polymorphism to create a modular and scalable product."
              ghLink="https://github.com/Sol-Aestuans/Deadwood-digital-board-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AWS based tic-tac-toe"
              description="Developed a cloud based tic-tac-toe using AWS, javascript, API's, and python. Leverages AWS' cognito user pools, verification..."
              ghLink="https://github.com/Sol-Aestuans/Cloud-tic-tac-toe" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
