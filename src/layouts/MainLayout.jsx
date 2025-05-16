import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Container fluid className="header-container">
          <Row className="header-container_row">
            <Col className="header-container_column" xs={12} md={9}>
              <h6>Relatos de papel</h6>
            </Col>

            <Col className="header-container_column" xs={12} md={3}>
              <p>Cart</p>
            </Col>
          </Row>
        </Container>
      </header>

      <main>{children}</main>

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
