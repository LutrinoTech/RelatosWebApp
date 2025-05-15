import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h1>Hero from home page !</h1>
      </section>

      <section className="books">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card className="books_item">
                <Card.Img
                  className="books_item_img"
                  variant="top"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dhfhb85-d29589db-0dc1-4905-b097-b48e70629b6e.jpg/v1/fit/w_800,h_1200,q_70,strp/fantasy_book_cover_design___song_of_the_ancients_by_lachrome_dhfhb85-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGhmaGI4NS1kMjk1ODlkYi0wZGMxLTQ5MDUtYjA5Ny1iNDhlNzA2MjliNmUuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BWGstD3hSbtMdnvLWRlqjS9a3Zq2eIyQiCBYvnbdbTU"
                />
                <Card.Body>
                  <Card.Title>Book title</Card.Title>
                  <Card.Text>
                    Some book's description coming from no special place.
                  </Card.Text>
                  <Button className="books_item_btn--orange">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="books_item">
                <Card.Img
                  className="books_item_img"
                  variant="top"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dhfwbll-1639f75b-2719-47b3-9a99-241e6a221b77.jpg/v1/fit/w_828,h_1242,q_70,strp/fantasy_book_cover_design__whispers_of_the_skyborn_by_lachrome_dhfwbll-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGhmd2JsbC0xNjM5Zjc1Yi0yNzE5LTQ3YjMtOWE5OS0yNDFlNmEyMjFiNzcuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0R_sKlmepceYLdlV-lJ-aJMXxx7XyaQrUnZsMosB2tk"
                />
                <Card.Body>
                  <Card.Title>Book title</Card.Title>
                  <Card.Text>
                    Some book's description coming from no special place.
                  </Card.Text>
                  <Button className="books_item_btn--orange">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="books_item">
                <Card.Img
                  className="books_item_img"
                  variant="top"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dec95rh-4d9c88ef-9480-46ad-a188-581da961f945.jpg/v1/fit/w_800,h_1200,q_70,strp/romance_book_cover_design__2_by_lachrome_dec95rh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGVjOTVyaC00ZDljODhlZi05NDgwLTQ2YWQtYTE4OC01ODFkYTk2MWY5NDUuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2cZN2GGy-iAG_TWgQ6J1esBPTktxJ5yNDqZ8FQF7xIs"
                />
                <Card.Body>
                  <Card.Title>Book title</Card.Title>
                  <Card.Text>
                    Some book's description coming from no special place.
                  </Card.Text>
                  <Button className="books_item_btn--orange">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
