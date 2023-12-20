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
    <div className="container text-center">
      <div className="row" style={{ display: "flex" }}>
        {movies.map((movie, index) => (
          <div className="col" key={index}>
            <MovieCard
              {...movie}
              onReviewClick={() => setShowReviewForm(movie.id)}
            />
            {showReviewForm === movie.id && (
              <ReviewForm
                onCancel={() => setShowReviewForm(null)}
                movieId={movie.id}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
