import { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../store/useStore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomCart from "../components/CustomCart";
import CustomCartTotal from "../components/CustomCartTotal";

const MainLayout = () => {
  const cartItems = useStore((state) => state.cartItems);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    className="header-container_icons--cart"
                    icon={faCartShopping}
                    size="lg"
                    color="gray"
                    onClick={handleShow}
                  />
                  <FontAwesomeIcon icon={faUser} size="lg" color="gray" />
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lista de compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="shop-list">
                {item.title} - ${item.price}
                <Button
                  className="delete-button"
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
            {cartItems.length === 0 && (
              <ListGroup.Item>La lista de compra está vacía</ListGroup.Item>
            )}
            {cartItems.length > 0 && <CustomCartTotal cartItems={cartItems} />}
          </ListGroup>

          {cartItems.length > 0 && (
            <Button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Finalizar compra
            </Button>
          )}
        </Offcanvas.Body>
      </Offcanvas>

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
