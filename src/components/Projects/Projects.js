import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nfst from '../../Assets/nfst.png';
import shows from '../../Assets/shows.png';
import fresh from '../../Assets/fresh.png';
import fabrx from '../../Assets/fabrx.png';
import weather from '../../Assets/weather.png';
import posituv from '../../Assets/positivus.png';
import cargo from '../../Assets/cargo.png';
import juste from '../../Assets/juste.png';
import hotel from '../../Assets/hotel.png';
import food from '../../Assets/food.png';
import daunku from '../../Assets/daunku.png';
import furniro from '../../Assets/furniro.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfst}
              isBlog={false}
              title="NFSt"
              // description="no info"
              ghLink="https://github.com/iskanderovv/NFSt"
              demoLink="https://nf-st.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shows}
              isBlog={false}
              title="Tv Shows"
              // description="no info"
              ghLink="https://github.com/iskanderovv/tv-shows"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fresh}
              isBlog={false}
              title="Hello Fresh"
              // description="no info"
              ghLink="https://github.com/iskanderovv/hello-fresh"
              demoLink="https://hello-fresh-eta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fabrx}
              isBlog={false}
              title="Fabrx"
              // description="no info"
              ghLink="https://github.com/iskanderovv/Fabrx"
              demoLink="https://fabrx.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              // description="no info"
              ghLink="https://github.com/iskanderovv/weather-app"
              demoLink="https://weather-app-swart-omega-75.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={posituv}
              isBlog={false}
              title="Positivus"
              // description="no info"
              ghLink="https://github.com/iskanderovv/Positivus"
              demoLink="https://iskanderovv.github.io/Positivus/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cargo}
              isBlog={false}
              title="Cargo"
              // description="no info"
              ghLink="https://github.com/iskanderovv/Cargo"
              demoLink="https://cargo-sand.vercel.app//"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={juste}
              isBlog={false}
              title="Juste"
              // description="no info"
              ghLink="https://github.com/iskanderovv/Eyeglasses"
              demoLink="https://iskanderovv.github.io/Eyeglasses/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel"
              // description="no info"
              ghLink="https://github.com/iskanderovv/hotel"
              demoLink="https://iskanderovv.github.io/hotel/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Network"
              // description="no info"
              ghLink="https://github.com/iskanderovv/EFood"
              demoLink="https://iskanderovv.github.io/EFood/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daunku}
              isBlog={false}
              title="Daunku"
              // description="no info"
              ghLink="https://github.com/iskanderovv/daunku"
              demoLink="https://iskanderovv.github.io/EFood/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniro}
              isBlog={false}
              title="Furniro"
              // description="no info"
              ghLink="https://github.com/iskanderovv/Furniro"
              demoLink="https://iskanderovv.github.io/Furniro/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
