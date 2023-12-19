import React from 'react';
import { useState } from 'react';
import { BASE_URL } from '../utils';
import Form from 'react-bootstrap/Form';

export const AddMovie = () => {
  const initialData = {
    image: '',
    title: '',
    genre: '',
    description: '',
    runtime: '',
    production_date: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(initialData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
        <Form.Label>Image</Form.Label>
        <Form.Control
          name="image"
          placeholder="Image URL"
          required
          value={formData['image']}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          placeholder="Title"
          required
          value={formData['title']}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          name="genre"
          placeholder="Genre"
          required
          value={formData['genre']}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          placeholder="Description"
          required
          value={formData['description']}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Label>Runtime</Form.Label>
        <Form.Control
          name="runtime"
          placeholder="Runtime"
          required
          value={formData['runtime']}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <Form.Label>Production Date</Form.Label>
        <Form.Control
          name="production_date"
          placeholder="Production Date"
          required
          value={formData['production_date']}
          onChange={handleChange}
        />
      </Form.Group>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default AddMovie;

