import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomCart from "../components/CustomCart";
import { useStore } from "../store/useStore";

const MainLayout = () => {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <>
      <header>
        <Container fluid className="header-container">
          <Row className="header-container_row">
            <Col className="header-container_column" xs={11}>
              <Navbar expand="lg">
                <Navbar.Brand href="/">Relatos de papel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link className="header-container_links" to="/home">
                      <span>Inicio</span>
                    </Link>
                    <Link className="header-container_links" to="/listing">
                      <span>Catálogo</span>
                    </Link>
                  </Nav>
                </Navbar.Collapse>

                <div className="header-container_icons">
                  <CustomCart items={cartItems.length} />

                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="lg"
                    color="gray"
                  />
                  <FontAwesomeIcon icon={faUser} size="lg" color="gray" />
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Container fluid className="footer-container">
          <Row className="header-container_row">
            <Col className="header-container_column" xs={12}>
              <h6>Relatos de papel</h6>
              <p>@Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MainLayout;
