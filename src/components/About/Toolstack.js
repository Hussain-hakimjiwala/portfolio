import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiRender,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender color="cyan"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter color="cyan"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
