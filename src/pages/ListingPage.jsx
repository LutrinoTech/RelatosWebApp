import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { books } from "../utils/data";
import CustomCard from "../components/CustomCard";

const ListingPage = () => {
  const allBooks = books.map((book) => (
    <CustomCard key={book.id} book={book} />
  ));

  return (
    <Container>
      <Row>
        <Col>
          <Form.Label htmlFor="bookTitle">Buscar</Form.Label>
          <Form.Control type="text" id="bookTitle" />
        </Col>
      </Row>

      <Row>{allBooks}</Row>
    </Container>
  );
};

export default ListingPage;
