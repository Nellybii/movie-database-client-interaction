import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
