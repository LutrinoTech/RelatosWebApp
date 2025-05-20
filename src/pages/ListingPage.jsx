import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useGetBooks } from "../hooks/useGetBooks";
import CustomCard from "../components/CustomCard";
import { useStore } from "../store/useStore";

const ListingPage = () => {
  const { books, title, setTitle } = useGetBooks();
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  const allBooks = books.map((book) => (
    <CustomCard key={book.id} book={book} add={handleAddToCart} />
  ));

  const handleInputField = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Label htmlFor="title">Buscar</Form.Label>

          <Form.Control
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleInputField}
          />
        </Col>
      </Row>

      <Row>{allBooks}</Row>
    </Container>
  );
};

export default ListingPage;
