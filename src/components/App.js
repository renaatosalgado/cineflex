import "../styles/reset.css";
import "../styles/styles.css";

import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Movies/Movies";
import Showtimes from "./Showtimes/Showtimes";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="view"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:movieId" element={<Showtimes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
