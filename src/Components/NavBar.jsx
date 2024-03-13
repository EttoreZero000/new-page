import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="header-home">
			<Link to="/">
      </Link>
			<nav className="nav-home" ref={navRef}>
            <div className="dropdown-home">
            <Link to="/">Inicio</Link>
          </div>

          <div className="dropdown-home">
            <Link to="#">Nosotros</Link>
          </div>

          <div className="dropdown-home">
            <Link to="#">Informacion</Link>
            <div className="dropdown-content-home">
              <Link to="#">Costo de servicio</Link>
              <Link to="#">Guias de los tramites</Link>
              <Link to="#">Preguntas frecuentes</Link>
              <Link to="#">Cotizar</Link>
            </div>
          </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <Link className="boton-home" to="#">
          Iniciar sesión
        </Link>
			</nav>
            
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
