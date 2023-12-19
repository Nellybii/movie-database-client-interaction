// MovieCard.js
import React, { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import ReviewForm from "./ReviewForm";  // Import the ReviewForm component

function MovieCard({ image, title, genre, description, runtime, production_date, movieId, reviewId }) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      <Row xs={1} md={2} className="g-4">
        <div style={{ margin: "3px" }}>
          <Card
            style={{
              width: "20rem",
              margin: "3px",
              height: "33rem",
              border: "solid",
              padding: "3px",
            }}
          >
            <Card.Img width={"200px"} height={"200px"} src={image} alt="" />
            <Card.Body>
              <h4>
                <strong>{title}</strong>
              </h4>
              <h6>
                <strong>{genre}</strong>
              </h6>
              <h6>
                <strong>{runtime}</strong>
              </h6>
              <h6>
                <strong>{production_date}</strong>
              </h6>
              <Card.Text>
                <strong>{description}</strong>
              </Card.Text>
              <Button type="button" onClick={() => setShowReviewForm(true)}>
                Review
              </Button>

              {showReviewForm && (
                <ReviewForm
                  onCancel={() => setShowReviewForm(false)}
                  movieId={movieId}
                  reviewId={reviewId}
                />
              )}
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default MovieCard;
