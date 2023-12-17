import React from "react";
import { Card, Button, Row } from "react-bootstrap";

function MovieCard({
  image,
  title,
  genre,
  description,
  runtime,
  production_date,
}) {
  return (
    <div style={{ margin: "20px" }}>
      <Row xs={1} md={2} className="g-4">
    <div style={{margin:'3px'}}>
          <Card style={{ width: "20rem", margin: "3px", height: "33rem", border:"solid", padding:"3px"}}>
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
                  <p>
                    <strong>{description}</strong>
                  </p>
              </Card.Text>
              <Button
                variant="success"
                style={{
                  marginBottom: "10px",
                  fontSize: "15px",
                  backgroundColor: "#1a4301",
                }}
              >
                Purchase
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default MovieCard;
