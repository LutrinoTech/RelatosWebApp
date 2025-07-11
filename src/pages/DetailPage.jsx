import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useGetSingleBook } from "../hooks/useGetSingleBook";
import { useStore } from "../store/useStore";

const DetailPage = () => {
  const { id } = useParams();
  const { book } = useGetSingleBook(id);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <Container className="detail-page">
      <Row>
        <Col className="detail-data-container">
          <h1>{book.title}</h1>
          <h2>${book.price}</h2>
          <div className="datail-data">
            <p>
              <span className="detail-data--bold">Author:</span> {book.author}
            </p>
            <p>
              <span className="detail-data--bold">Pages:</span> {book.pages || "N/A"}
            </p>
            <p>
              <span className="detail-data--bold">Category:</span> {book.category}
            </p>
          </div>
          <p>
            {book.description || `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
          <Button
            className="books_item_btn--orange"
            onClick={() => handleAddToCart(book)}
          >
            Agregar al carrito
          </Button>
        </Col>

        <Col className="detail-container">
          <Image className="detail-container_image" src={book.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyma7ghZ3NnM5A58f5-B8vonB_SiDKzdgowXaUFQRb7dTh-XyUWAd1XfchvPUlwai5lE&usqp=CAU"} rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
