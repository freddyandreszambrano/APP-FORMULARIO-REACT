import React, {Fragment} from "react";
import ContactPage from "../contact/ContactPage";

function HomePage() {
    return (
        <Fragment>
            <section id="presentacion" className="bg-light py-5 text-center">
                <div className="container py-4">
                    <div className="mb-3">
                        <i className="bi bi-check-circle-fill" style={{fontSize: "2.5rem", color: "#dc143c"}}></i>
                    </div>
                    <h2 className="display-6 fw-bold mb-3 text-danger">¡Formulario con Validaciones!</h2>
                    <p className="lead text-secondary">
                        Completa nuestro formulario validado con <span className="fw-semibold">React</span> y <span
                        className="fw-semibold">Bootstrap</span> para contactarnos de forma fácil y segura.
                    </p>
                </div>
            </section>


            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="card shadow-lg rounded-4 p-4 p-md-5" style={{background: "#fff8f0"}}>
                                <ContactPage/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;
