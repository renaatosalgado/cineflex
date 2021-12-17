import { Link } from "react-router-dom";

export default function Navbar({ setOrder }) {

  function returnHome() {
    setOrder(null);
  }

  return (
    <Link to="/">
      <div className="navbar" onClick={returnHome}>
        Cineflex
      </div>
    </Link>
  );
}
