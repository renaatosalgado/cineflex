import { useNavigate } from "react-router-dom";

export default function Success({ order, setOrder }) {
  const navigate = useNavigate();

  if (!order) {
    navigate("/");
  }

  function returnHome() {
    setOrder(null);
    navigate("/");
  }

  return (
    <div className="page-preview">
      <div className="page-title">
        Pedido feito
        <br />
        com sucesso!
      </div>

      <div className="info-group">
        <div className="title">Filme e sessão</div>
        <div>{order.showtime.movie.title}</div>
        <div>
          {order.showtime.day.date} - {order.showtime.name}
        </div>
      </div>

      <div className="info-group">
        <div className="title">Ingressos</div>
        {order.selectedSeats.map((s) => (
          <div key={s.name}>Assento {s.name}</div>
        ))}
      </div>

      <div className="info-group">
        <div className="title">Comprador</div>
        <div>{order.name}</div>
        <div>CPF: {order.cpf}</div>
      </div>

      <button className="back-home" onClick={returnHome}>
        Voltar pra Home
      </button>
    </div>
  );
}
