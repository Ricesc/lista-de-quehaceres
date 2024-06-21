import { useState } from "react";

const FormularioTareas = ({ agregarTarea }) => {
    const [texto, setTexto] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        if (texto.trim()) {
            agregarTarea(texto);
            setTexto("");
        }
    };

    return (
        <>
            <h2>Formulario Tareas</h2>
            <form onSubmit={manejarEnvio}>
                <div>
                    <label htmlFor="tarea">Agregar Tarea:</label>
                    <input
                        type="text"
                        id="tarea"
                        name="tarea"
                        value={texto}
                        onChange={(event) => setTexto(event.target.value)}
                    />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </>
    );
};

export default FormularioTareas;
