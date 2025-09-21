import React, {useState} from "react";
import {FaEnvelope, FaLock, FaUser} from "react-icons/fa";

function FormularioContacto() {
    const [datos, setDatos] = useState({nombre: "", correo: "", contrasena: ""});
    const [errores, setErrores] = useState({nombre: "", correo: "", contrasena: ""});

    const validarCampo = (campo, valor) => {
        let mensaje = "";
        if (campo === "nombre") {
            if (!valor.trim()) mensaje = "El nombre es obligatorio";
            else if (valor.trim().length < 2) mensaje = "El nombre debe tener al menos 2 caracteres";
        }
        if (campo === "correo") {
            if (!valor.trim()) mensaje = "El correo es obligatorio";
            else if (!/\S+@\S+\.\S+/.test(valor)) mensaje = "Correo electrónico inválido";
        }
        if (campo === "contrasena") {
            if (!valor) mensaje = "La contraseña es obligatoria";
            else if (valor.length < 8) mensaje = "La contraseña debe tener al menos 8 caracteres";
        }
        setErrores(prev => ({...prev, [campo]: mensaje}));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatos({...datos, [name]: value});
        validarCampo(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Object.keys(datos).forEach(campo => validarCampo(campo, datos[campo]));
        if (Object.values(errores).every(msg => msg === "") &&
            Object.values(datos).every(val => val.trim() !== "")) {
            alert("¡Formulario enviado correctamente!");
            setDatos({nombre: "", correo: "", contrasena: ""});
            setErrores({nombre: "", correo: "", contrasena: ""});
        }
    };

    const hayErrores = Object.values(errores).some(msg => msg !== "");
    const hayVacios = Object.values(datos).some(val => val.trim() === "");

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="mb-4 text-center fw-bold text-danger">Formulario de Contacto</h3>
            <div className="mb-3">
                <label className="form-label fw-semibold">
                    <FaUser className="me-2 text-danger"/>
                    Nombre
                </label>
                <input
                    type="text"
                    className={`form-control rounded-3 ${errores.nombre ? "is-invalid" : ""}`}
                    name="nombre"
                    value={datos.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                />
                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label fw-semibold">
                    <FaEnvelope className="me-2 text-danger"/>
                    Correo electrónico
                </label>
                <input
                    type="email"
                    className={`form-control rounded-3 ${errores.correo ? "is-invalid" : ""}`}
                    name="correo"
                    value={datos.correo}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                />
                {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label fw-semibold">
                    <FaLock className="me-2 text-danger"/>
                    Contraseña
                </label>
                <input
                    type="password"
                    className={`form-control rounded-3 ${errores.contrasena ? "is-invalid" : ""}`}
                    name="contrasena"
                    value={datos.contrasena}
                    onChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                />
                {errores.contrasena && <div className="invalid-feedback">{errores.contrasena}</div>}
            </div>
            <button
                type="submit"
                className="btn btn-danger w-100 rounded-3 fw-bold"
                disabled={hayErrores || hayVacios}
            >
                Enviar
            </button>
        </form>
    );
}

export default FormularioContacto;
