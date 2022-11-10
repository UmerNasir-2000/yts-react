import Navbar from "./shared/Navbar/navbar";
import Footer from "./shared/Footer/footer";
import Home from "./pages/Home";
import HD from "./pages/HD";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import BrowseMovies from "./pages/BrowseMovies";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/4k" element={<HD />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/browse" element={<BrowseMovies />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
