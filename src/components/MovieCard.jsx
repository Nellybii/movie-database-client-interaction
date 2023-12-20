// MovieCard.js
import React from "react";
import { Card, Row, Button } from "react-bootstrap";

function MovieCard({
  image,
  title,
  genre,
  description,
  runtime,
  production_date,
  onReviewClick,
}) {
  return (
    <div className="card" style={{ width: "18rem", padding:"2px", margin:"2px", border:"solid", height:"25rem"}}>
      <img src={image} className="card-img-top" alt={title} style={{height:"100px"}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{genre}</p>
        <p className="card-text">{runtime}</p>
        <p className="card-text">{production_date}</p>
        <p className="card-text">{description}</p>
        <Button type="button" onClick={onReviewClick}>
          Review
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;
