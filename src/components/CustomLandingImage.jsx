import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CustomLandingImage = ({ url }) => {
  return (
    <Col className="landing-container_column" xs={12} md={2}>
      <Image className="landing-container_image" src={url} rounded />
    </Col>
  );
};

export default CustomLandingImage;
