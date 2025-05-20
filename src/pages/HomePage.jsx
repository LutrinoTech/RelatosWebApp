import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router";
import CustomCard from "../components/CustomCard";
import { books } from "../utils/data";
import { useStore } from "../store/useStore";

const HomePage = () => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  const newBooks = books.slice(0, 3).map((book) => {
    return <CustomCard key={book.id} book={book} add={handleAddToCart} />;
  });

  return (
    <>
      <section className="hero">
        <Container>
          <Row className="hero_row">
            <Col xs={12} md={7} className="hero_column">
              <h1>Encuentra tus libros favoritos</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link to="/listing">
                <Button className="hero_colum_btn--orange">Ver catálogo</Button>
              </Link>
            </Col>

            <Col xs={12} md={5} className="hero_column">
              <Image
                className="hero_column_img"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6dd6a901-08aa-4f66-863a-8e67de5f3f2a/djqhgwm-90f8dcb1-c886-4e2b-b0a4-b37da58ff52b.jpg/v1/fit/w_828,h_1104,q_70,strp/book_cover_026___burning_maze___andrew_martin_by_stevencasteel_djqhgwm-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwMCIsInBhdGgiOiJcL2ZcLzZkZDZhOTAxLTA4YWEtNGY2Ni04NjNhLThlNjdkZTVmM2YyYVwvZGpxaGd3bS05MGY4ZGNiMS1jODg2LTRlMmItYjBhNC1iMzdkYTU4ZmY1MmIuanBnIiwid2lkdGgiOiI8PTIyNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.khD3xrtIS0LkWa5Zcs09Y5eMjWYxysazOadgM0UQzaE"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="books">
        <Container>
          <Row>
            <h2>Novedades</h2>
          </Row>
          <Row>{newBooks}</Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
