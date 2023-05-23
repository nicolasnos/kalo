import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import logo from "../assets/images/Nlogo.png";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container className="me-auto">
          <Badge bg="light" text="dark">
            Bienvenido al e-commerce de NOS
          </Badge>
          <Nav>
            <Col xs={6} md={4}>
              <Image src={logo} roundedCircle width={100} />
            </Col>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
