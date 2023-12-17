import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movieslist" element={<MoviesList />} />
      </Routes>
    </>
  );
}

export default App;
