import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router";
import CustomCard from "../components/CustomCard";
import { books } from "../utils/data";

const HomePage = () => {
  const newBooks = books.slice(0, 3).map((book) => {
    return <CustomCard key={book.id} book={book} />;
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
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgtgimc-6145e7f9-9e6b-4e4e-86de-38680b201136.jpg/v1/fit/w_828,h_1358,q_70,strp/db265ca40_by_papangu999_dgtgimc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEwMCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGd0Z2ltYy02MTQ1ZTdmOS05ZTZiLTRlNGUtODZkZS0zODY4MGIyMDExMzYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3mwfrfSZsSVDEFKofkAQ_3wNMa778Qpk7X13Hc3KfFc"
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
