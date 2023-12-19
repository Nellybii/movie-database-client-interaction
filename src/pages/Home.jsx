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
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((movies) => {
          console.log("Movies data:", movies);
          setMovies(movies);
        })
        .catch((err) => console.error("Fetch error:", err));
    };
  
    handleFetchData();
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "gray" }}>
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard
              {...movie}
              onReviewClick={() => setShowReviewForm(true)}
            />
          </Col>
        ))}
  

      {showReviewForm && (
        <ReviewForm
        movieId={yourMovieId} reviewId={yourReviewId}
          onCancel={() => setShowReviewForm(false)}
          
        />
      )}
    </Container>
  );
}

export default Home;
