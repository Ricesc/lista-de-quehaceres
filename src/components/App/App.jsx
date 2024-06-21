import { useState, useEffect } from "react";
import FormularioTareas from "../FormularioTareas/FormularioTareas";
import Tarea from "../Tarea/Tarea";
import "./App.css";

const App = () => {
    // Recuperar tareas de localStorage al cargar
    const [tareas, setTareas] = useState(() => {
        const tareasGuardadas = localStorage.getItem("tareas");
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    });

    useEffect(() => {
        // Guardar tareas en localStorage cada vez que cambian
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = (texto) => {
        const nuevaTarea = { texto, completada: false };
        setTareas([...tareas, nuevaTarea]);
    };

    const eliminarTarea = (indice) => {
        setTareas(tareas.filter((_, index) => index !== indice));
    };

    const alternarTarea = (indice) => {
        setTareas(
            tareas.map((tarea, index) =>
                index === indice
                    ? { ...tarea, completada: !tarea.completada }
                    : tarea
            )
        );
    };

    return (
        <div className="App">
            <h1>Lista de quehaceres</h1>
            <FormularioTareas agregarTarea={agregarTarea} />
            <ul>
                {tareas.map((tarea, index) => (
                    <Tarea
                        key={index}
                        tarea={tarea}
                        onEliminar={() => eliminarTarea(index)}
                        onAlternar={() => alternarTarea(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
