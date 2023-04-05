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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Social Media"
              description="Build a social networking site with functions of posting, commenting,
              following, messaging, videocall, audio call
              "
              ghLink="https://github.com/nhathoagn/MERN-Stack-Social-Media-new-"
              demoLink="https://github.com/nhathoagn/MERN-Stack-Social-Media-new-/tree/main/Demo-Social-Media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Chat Realtime"
              description="Use ReactJS, SocketIO, WebRTC to solve real-time messaging, videocall
              problems"
              ghLink="https://github.com/nhathoagn/WebChat_Realtime"
              demoLink="https://github.com/nhathoagn/WebChat_Realtime/tree/main/Demo-ChatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix Clone"
              description="Build a website with the same functions as Netflix.
              "
              ghLink="https://github.com/nhathoagn/netflix_clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog Website"
              description="Build a simple blog site (CRUD).
              "
              ghLink="https://github.com/nhathoagn/Blog_ReactJS.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Build ChatGPT AI Tool"
              description="Build ChatGPT AI Tool.
              "
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Youtube Clone"
              description="Build a website with the same functions as Youtube.
              "
              ghLink="https://github.com/nhathoagn/youtube_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
