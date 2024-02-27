import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello,<br/>
          I'm <span className="purple">Hussain Hakimji wala</span>, currently in the <spam className="purple">Third year of my Integrated B-Tech in Computer Science and engineering at Geetanjali institute of technical studies, Dabok (Udaipur)</spam>. While my academic focus lies in IT, I'm equally passionate about diverse pursuits.
          <br/><br/>
            Apart from coding, some other activities that I love to do!
           </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>"Welcome to my Portfolio. Here, I merge my technical prowess with a tapestry of diverse passions, offering a holistic view of my journey and ambitions. Spanning my proficiency in specific technical skills, intertwined with a fervor for interests/hobbies, I aim for a well-rounded profile. Explore to see how my passions drive innovation and growth."
</p>
          
<p style={{ color: "magenta" }}>Thought Of My Life</p>
          <p style={{ color: "cyan" }}>
          "The quieter you become, the more you can hear."{" "}
          </p>
          <footer className="blockquote-footer">         Ram Dass.</footer>
          <p style={{ color: "cyan" }}>
          "In the end, we only regret the chances we didn't take."{" "}
          </p>
          <footer className="blockquote-footer">        Lewis Carroll.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
