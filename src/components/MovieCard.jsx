import React, { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import { BASE_URL } from "../utils";

function MovieCard({
  image,
  title,
  genre,
  description,
  runtime,
  production_date,
  onReviewClick,
}) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleFormSubmitReview = (formData) => {
    fetch(`${BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Review submitted successfully:", data);
        setShowReviewForm(false); // Hide the review form after submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleReviewClick = () => {
    console.log("Review button clicked");
    setShowReviewForm(true);
  };

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
              <Button type="button" onClick={onReviewClick}>
                Review
              </Button>

              {showReviewForm && (
                <ReviewForm
                  onCancel={() => setShowReviewForm(false)}
                  onSubmit={handleFormSubmitReview}
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
