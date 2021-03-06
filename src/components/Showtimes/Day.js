import Showtime from "./Showtime";

export default function Day({ day }) {
  return (
    <div className="day">
      <div className="title">
        {day.weekday} - {day.date}
      </div>

      <div className="showtime-list">
        {day.showtimes.map((showtime, index) => (
          <Showtime showtime={showtime} key={index}/>
        ))}
      </div>
    </div>
  );
}
