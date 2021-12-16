import { Link } from "react-router-dom";

export default function Showtime({ showtime }) {
  return (
    <Link to={`/assentos/${showtime.id}`}>
      <div className="showtime">{showtime.name}</div>
    </Link>
  );
}
