import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="blue">Aidan Ainsworth </span>
            and I currently live in <span className="blue"> Seattle, Washington.</span> I'm a proud PNW native.
            <br />
            I'm a recent graduate from <span className="blue">Western Washington University</span> with a B.S. in Computer Science and minor in Mathematics. 
            <br />
            I am currently seeking entry-level employment in <span className="blue">Software Development, Cloud Computing, IT Application Development, Quality Assurance, and Network Services.</span>
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

          <p className="blockquote-footer">
            "Continuous improvement is better than delayed perfection."{" "}
          </p>
          <footer className="blockquote-footer">Mark Twain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
