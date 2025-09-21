import React, {useState} from "react";

function Navbar() {
    const [isMenuOpen, isMobileOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
            <div className="container">
                <a className="navbar-brand text-danger fw-bold" href="#">Formulario</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => isMobileOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#presentacion">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#mision-vision">Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
