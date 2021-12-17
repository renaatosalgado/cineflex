import "../styles/reset.css";
import "../styles/styles.css";

import Navbar from "./Navbar";
import Movies from "./Movies/Movies";
import Showtimes from "./Showtimes/Showtimes";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [order, setOrder] = useState(null);

  return (
    <>
      <div className="view">
        <BrowserRouter>
          <Navbar setOrder={setOrder} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/sessoes/:movieId" element={<Showtimes />} />
            <Route
              path="assentos/:showtimeId"
              element={<Seats setOrder={setOrder} />}
            />
            <Route
              path="/sucesso"
              element={<Success order={order} setOrder={setOrder} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
