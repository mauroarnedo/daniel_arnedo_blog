import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about" style={{display: "none"}}>Sobre mi</Link></li>
          <li><Link to="/works">Galeria</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <header>
        <h1>Daniel Leonardo Arnedo</h1>
      </header>
    </div>
  );
}
