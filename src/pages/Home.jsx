import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Container } from "react-bootstrap";
import  MovieCard  from "/src/components/MovieCard";


const data = [
  {
    id: 1,
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg',
    title: 'Leave the World Behind (2023)',
    genre: 'Drama, Mystery, Thriller, Science Fiction',
    description: 'A family\'s getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices — and two strangers appear at their door.',
    runtime: '2h 21m',
    production_date: "2022-12-12T00:00:00",
  }
];

function Home() {
  const [movies, setMovies] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleFetchData = () => {
      fetch(`${BASE_URL}/movies`)
        .then((res) => res.json())
        .then((movies) => setMovies(movies))
        .catch((err) => console.log(err));
    };

    handleFetchData();
  }, []);

  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid style={{backgroundColor:"blue"}}>
      <input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{margin:"20px", width:"100%"}}
      />
      {searchedMovies.length > 0 ? (
        <>
          {searchedMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} /> 
          ))}
        </>
      ) : (
        <div>
          <p>No events</p>
        </div>
      )}
    </Container>
  );
}

export default Home;
