
import { Container, Row, Col, Navbar} from "react-bootstrap";
import logo from "../assets/img/Sathya (2).svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center text-sm-start">
          <Col>
            <Navbar.Brand href="#home">
              <span className="name-texter">Sathya</span>
            </Navbar.Brand>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sathya-thenappan-28ba73174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="nav" />
              </a>
              <a
                href="https://github.com/sathyat20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="nav" />
              </a>
            </div>
            <p>Copyright 2024. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

}