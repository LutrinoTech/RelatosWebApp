import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Container fluid className="header-contaier">
          <Row className="header-contaier_row">
            <Col className="header-contaier_column" xs={12} md={9}>
              <p>Book Shop from layout!</p>
            </Col>

            <Col className="header-contaier_column" xs={12} md={3}>
              <p>Cart from layout!</p>
            </Col>
          </Row>
        </Container>
      </header>

      <main>{children}</main>

      <footer>
        <Container fluid className="header-contaier">
          <Row className="header-contaier_row">
            <Col className="header-contaier_column" xs={12} md={9}>
              <p>Footer from layout!</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MainLayout;
