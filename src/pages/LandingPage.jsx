import { useEffect } from "react";
import { useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { landingCover } from "../utils/data";
import CustomLandingImage from "../components/CustomLandingImage";

const LandingPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Container className="landing-container">
        <Row className="landing-container_row">
          {landingCover.map((cover) => (
            <CustomLandingImage key={cover.id} url={cover.url} />
          ))}
        </Row>

        <Row className="landing-container_text-row">
          <Col>
            <h1>Compra tus libros favoritos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button
              className="landing-btn--orange"
              onClick={() => navigate("/home")}
            >
              Comprar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
