import React, {Fragment} from "react";
import Card from "../shared/Card";
import ContactPage from "../contact/ContactPage";

function HomePage() {
    return (
        <Fragment>
            <section id="presentacion" className="bg-light py-5 text-center">
                <div className="container">
                    <h2 className="display-5">¡El Sabor Original!</h2>
                    <p className="lead">
                        Disfruta del inconfundible sabor de nuestro pollo frito, hecho con la receta secreta de 11
                        hierbas y especias del Coronel Sanders.
                    </p>
                    <a href="#contacto" className="btn btn-danger">¡Contáctanos Ahora!</a>
                </div>
            </section>

            <section id="mision-vision" className="py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="text-danger">Conoce KFC</h2>
                        <p className="text-secondary">Más de 70 años llevando el mejor sabor a familias de todo el
                            mundo</p>
                    </div>
                    <div className="row">
                        <Card
                            title="Nuestra Misión"
                            description="Ofrecer comida rápida de calidad excepcional, con un sabor único e inigualable, brindando un servicio extraordinario que cree momentos de felicidad y satisfacción para nuestros clientes en cada visita."
                        />
                        <Card
                            title="Nuestra Visión"
                            description="Ser la cadena de restaurantes líder mundial en pollo frito, reconocida por nuestra calidad superior, innovación constante y compromiso genuino con las comunidades que servimos."
                        />
                    </div>
                </div>
            </section>

            <ContactPage/>

        </Fragment>
    );
}

export default HomePage;
