export default function Footer({ showtime, weekday, name }) {
  return (
    <div className="footer">
      <div className="poster">
        <img src={showtime.posterURL} alt="poster" />
      </div>

      <div className="info">
        <span>{showtime.title}</span>
        <span>{weekday ? `${weekday} - ${name}` : ""}</span>
      </div>
    </div>
  );
}
