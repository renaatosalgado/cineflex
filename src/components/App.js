import "../styles/reset.css";
import "../styles/styles.css";

import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Movies/Movies";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="view"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
