import Footer from "../Footer";
import Subtitle from "./Subtitle";

import { getSeats, postBooking } from "../../service/API";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Seats({ setOrder }) {
  const [showtime, setShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const { showtimeId } = useParams();

  useEffect(() => {
    getSeats(showtimeId).then((res) => {
      setShowtime(res.data);
    });
    //eslint-disable-next-line
  }, []);

  function selectSeats(seat) {
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    seat.isAvailable = true;

    if (selectedSeats.includes(seat)) {
      const filteredSeats = selectedSeats.filter((s) => s !== seat);
      setSelectedSeats(filteredSeats);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  function makeBooking() {
    const body = {
      ids: selectedSeats.map((seat) => seat.id),
      name,
      cpf,
    };

    if (name && cpf && selectedSeats.length > 0) {
      postBooking(body);
      navigate("/sucesso");
    }
    setOrder({
      showtime,
      selectedSeats,
      name,
      cpf,
    });
  }

  return (
    <div className="page-seats">
      <div className="page-title">Selecione o(s) assento (s)</div>

      <div className="seat-list">
        {showtime
          ? showtime.seats.map((s) => (
              <div
                className={`seat ${s.isAvailable ? "" : "unavailable"}
            ${
              selectedSeats.find((seat) => seat.id === s.id) ? "selected" : ""
            }`}
                onClick={() => selectSeats(s)}
                key={s.name}
              >
                {s.name}
              </div>
            ))
          : ""}
      </div>

      <Subtitle />

      <div className="form">
        <div className="input-group">
          <div className="title">Nome do comprador:</div>
          <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>

        <div className="input-group">
          <div className="title">CPF do comprador:</div>
          <input
            type="text"
            placeholder="Digite seu CPF..."
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
        </div>
      </div>

      <button className="book-seats" onClick={makeBooking}>
        Reservar assento(s)
      </button>

      {showtime ? (
        <Footer
          showtime={showtime.movie}
          weekday={showtime.day.weekday}
          name={showtime.name}
        />
      ) : (
        ""
      )}
    </div>
  );
}
