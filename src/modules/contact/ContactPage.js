import React, {useState} from "react";

function ContactPage() {
    const [form, setForm] = useState({nombre: "", correo: "", telefono: "", mensaje: ""});
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.nombre || form.nombre.length < 2) newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
        if (!/\S+@\S+\.\S+/.test(form.correo)) newErrors.correo = "Correo inválido";
        if (!form.telefono || form.telefono.length < 7) newErrors.telefono = "Teléfono inválido";
        if (!form.mensaje || form.mensaje.length < 10) newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("¡Mensaje enviado correctamente!");
            setForm({nombre: "", correo: "", telefono: "", mensaje: ""});
        }
    };

    return (
        <section id="contacto" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="text-danger">¡Hablemos!</h2>
                    <p className="text-secondary">
                        ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte y brindarte la mejor atención.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow p-4 p-md-5">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre Completo</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                    />
                                    {errors.nombre && (
                                        <div className="invalid-feedback">{errors.nombre}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.correo ? "is-invalid" : ""}`}
                                        name="correo"
                                        value={form.correo}
                                        onChange={handleChange}
                                    />
                                    {errors.correo && (
                                        <div className="invalid-feedback">{errors.correo}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                                        name="telefono"
                                        value={form.telefono}
                                        onChange={handleChange}
                                    />
                                    {errors.telefono && (
                                        <div className="invalid-feedback">{errors.telefono}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Mensaje</label>
                                    <textarea
                                        className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                                        name="mensaje"
                                        rows="5"
                                        value={form.mensaje}
                                        onChange={handleChange}
                                    />
                                    {errors.mensaje && (
                                        <div className="invalid-feedback">{errors.mensaje}</div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-danger w-100">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;