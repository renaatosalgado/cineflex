import Day from "./Day";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getShowtimes } from "../../service/API";

export default function Showtimes() {
  const [showtime, setShowtime] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getShowtimes(movieId).then((res) => {
      setShowtime(res.data);
    });
  }, []);

  return (
    <>
      <div className="page-title">Selecione o horário</div>

      <div className="day-list">
        {showtime ? showtime.days.map((day, index) => <Day day={day} key={index}/>) : ""}
      </div>

      {showtime ? <Footer showtime={showtime} /> : ""}
    </>
  );
}
