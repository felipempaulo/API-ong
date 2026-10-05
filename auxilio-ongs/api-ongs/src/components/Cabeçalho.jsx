import { Link } from "react-router-dom";

export default function Cabeçalho() {
  return (
    <header>
      <Link to="/">
        <h1>Auxílio ONGs</h1>
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}
