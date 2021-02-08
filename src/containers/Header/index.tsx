import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
}

export default Header;
