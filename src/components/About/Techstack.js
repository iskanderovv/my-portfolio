import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineAntDesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
    </Row>
  );
}

export default Techstack;
