import { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import CustomCartTotal from "../components/CustomCartTotal";
import CustomCheckoutItem from "../components/CustomCheckoutItem";

const CheckoutPage = () => {
  let navigate = useNavigate();
  const cartItems = useStore((state) => state.cartItems);
  const clearCart = useStore((state) => state.clearCart);
  const [alert, setAlert] = useState(null);
  const handleCheckout = () => {
    clearCart();
    setTimeout(() => {
      navigate("/home");
    }, 5000);
    setAlert(
      <Alert variant="success">
        <Alert.Heading>Compra exitosa!</Alert.Heading>
        <p>Serás dirigido a la página de inicio en unos segundos.</p>
      </Alert>,
    );
  };

  return (
    <Container className="checkout-page">
      {alert}

      <Row>
        <Col xs={12}>
          <ListGroup>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CustomCheckoutItem key={item.id} item={item} />
              ))
            ) : (
              <ListGroup.Item>La lista de compra está vacía</ListGroup.Item>
            )}

            {cartItems.length > 0 && <CustomCartTotal cartItems={cartItems} />}
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          {cartItems.length > 0 && (
            <Button
              className="pay-button"
              variant="primary"
              onClick={handleCheckout}
            >
              Pagar
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
