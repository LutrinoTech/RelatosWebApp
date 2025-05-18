import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const MainLayout = () => {
  return (
    <>
      <header>
        <Container fluid className="header-container">
          <Row className="header-container_row">
            <Col className="header-container_column" xs={10} md={11}>
              <h6>Relatos de papel</h6>
            </Col>

            <Col className="header-container_column" xs={2} md={1}>
              <div className="header-container_icons">
                <FontAwesomeIcon icon={faCartShopping} size="lg" color="gray" />
                <FontAwesomeIcon icon={faUser} size="lg" color="gray" />
              </div>
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
