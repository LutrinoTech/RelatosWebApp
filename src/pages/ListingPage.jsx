import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useGetBooks } from "../hooks/useGetBooks";
import CustomCard from "../components/CustomCard";

const ListingPage = () => {
  const { books, title, setTitle } = useGetBooks();

  const allBooks = books.map((book) => (
    <CustomCard key={book.id} book={book} />
  ));

  const handleInputField = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
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
