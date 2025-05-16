import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faThumbsUp,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const CustomCard = ({ book }) => {
  return (
    <Col xs={12} md={4}>
      <Card className="books_item">
        <Card.Img className="books_item_img" variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle>{book.author}</Card.Subtitle>
          <div className="card-metada-group">
            <div className="card-metadata">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                size="lg"
                color="gray"
              />
              <span>{book.price}</span>
            </div>

            <div className="card-metadata">
              <FontAwesomeIcon icon={faThumbsUp} size="lg" color="gray" />
              <span>{book.likes}</span>
            </div>

            <div className="card-metadata">
              <FontAwesomeIcon icon={faBookOpen} size="lg" color="gray" />
              <span>{book.pages}</span>
            </div>
          </div>
          <div className="card_actions">
            <Button className="books_item_btn--orange">
              Agregar al carrito
            </Button>

            <Button className="books_item_btn--orange">Ver</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
