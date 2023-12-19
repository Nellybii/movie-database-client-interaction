import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import NavBar from "./components/NavBar";
import MovieCard from "./components/MovieCard";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/moviecard" element={<MovieCard />} />
      </Routes>
    </>
  );
}

export default App;
