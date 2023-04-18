import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/ReactJS-Nguyen-Nhat-Hoang.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const js =
  "https://raw.githubusercontent.com/nhathoang3518/portfolio/main/src/Assets/javascript_basic_certificate.pdf";
const sql =
  "https://raw.githubusercontent.com/nhathoang3518/portfolio/main/src/Assets/problem_solving.pdf";
const problem_solve =
  "https://raw.githubusercontent.com/nhathoang3518/portfolio/main/src/Assets/sql_basic_certificate.pdf";

function Certifications() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Document file={js} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.6} />
          </Document>
        </Row>

        <Row className="resume">
          <Document file={sql} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.6} />
          </Document>
        </Row>

        <Row className="resume">
          <Document
            file={problem_solve}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Certifications;
