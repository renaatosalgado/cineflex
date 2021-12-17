export default function Subtitle() {
  return (
    <div className="seat-subtitle">
      <div className="subtitle">
        <div className="seat selected"></div>
        Selecionado
      </div>

      <div className="subtitle">
        <div className="seat"></div>
        Disponível
      </div>

      <div className="subtitle">
        <div className="seat unavailable"></div>
        Inisponível
      </div>
    </div>
  );
}
