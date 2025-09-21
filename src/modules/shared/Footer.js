import React from "react";
import {FaFacebookF, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <p className="mb-0">&copy; 2025 KFC Ecuador. Todos los derechos reservados.</p>
                    </div>
                    <div
                        className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                        <span className="me-2">Síguenos en:</span>
                        <a
                            href="https://www.facebook.com/kfc"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white fs-5 hover-icon"
                        >
                            <FaFacebookF/>
                        </a>
                        <a
                            href="https://www.instagram.com/kfc/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white fs-5 hover-icon"
                        >
                            <FaInstagram/>
                        </a>
                        <a
                            href="https://twitter.com/kfc"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white fs-5 hover-icon"
                        >
                            <FaTwitter/>
                        </a>
                        <a
                            href="https://www.tiktok.com/@kfc"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white fs-5 hover-icon"
                        >
                            <FaTiktok/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
