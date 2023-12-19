import React from "react";
import { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { BASE_URL } from "../utils";

function ReviewForm({ onCancel, onSubmit,movieId, reviewId }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationality: "",
    rating: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
        ...formData,
        movie_id: movieId,
        review_id: reviewId,
    };

    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setIsLoading(false);
    if (onSubmit) {
      onSubmit(data);
    }
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name="firstName"
          onChange={handleChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNationality">
        <Form.Label>Nationality</Form.Label>
        <Form.Control type="text" placeholder="Enter nationality" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRating">
        <Form.Label>Rating (1-10)</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="10"
          placeholder="Enter rating"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </Form>
  );
}

export default ReviewForm;
