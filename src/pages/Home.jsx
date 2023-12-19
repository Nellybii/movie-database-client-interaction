import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import ReviewForm from "../components/ReviewForm";

function Home() {
  const [movies, setMovies] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const handleFetchData = () => {
      fetch(`${BASE_URL}/movies`)
        .then((res) => res.json())
        .then((movies) => setMovies(movies))
        .catch((err) => console.log(err));
    };

    handleFetchData();
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "gray" }}>
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-around">
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard
              {...movie}
              onReviewClick={() => setShowReviewForm(true)}
            />
          </Col>
        ))}
      </Row>

      {showReviewForm && (
        <ReviewForm
          onCancel={() => setShowReviewForm(false)}
          // You can pass other necessary props or callbacks here
        />
      )}
    </Container>
  );
}

export default Home;
