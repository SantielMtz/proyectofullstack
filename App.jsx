import React, { useState } from "react";

function Formulario() {
    const [nombre, setNombre] = useState(""); 
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setNombre(e.target.value);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === "") {
            setError("El nombre es obligatorio");
        } else {
            alert(`¡Hola, ${nombre}!`);
        }
    };

    return (
        <div className="container">
            <h2>Formulario de ejemplo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}

export default function App() {
    return <Formulario />;
}