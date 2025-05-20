import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {
  faHandHoldingDollar,
  faThumbsUp,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import CustomCardData from "./CustomCardData";

const CustomCard = ({ book, add }) => {
  let navigate = useNavigate();

  return (
    <Col xs={12} md={4}>
      <Card className="books_item">
        <Card.Img
          className="books_item_img"
          variant="top"
          src={book.image}
          onClick={() => navigate(`/detail/${book.id}`)}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle>{book.author}</Card.Subtitle>
          <div className="card-metada-group">
            <CustomCardData icon={faHandHoldingDollar} data={book.price} />
            <CustomCardData icon={faThumbsUp} data={book.likes} />
            <CustomCardData icon={faBookOpen} data={book.pages} />
          </div>
          <Button className="books_item_btn--orange" onClick={() => add(book)}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
