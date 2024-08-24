import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple">Aidan Ainsworth </span>
            and I currently live in <span className="purple"> Seattle, Washington.</span> I'm a proud PNW native.
            <br />
            I'm a recent graduate from <span className="purple">Western Washington University</span> with a B.S. in Computer Science and minor in Mathematics. 
            <br />
            I am currently seeking entry-level employment in <span className="purple">Software Development, Cloud Computing, IT Application Development, Quality Assurance, and Network Services.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Card, Board, & Video games!
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking & Baking
            </li>
            <li className="about-activity">
              <ImPointRight /> Getting Active
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
