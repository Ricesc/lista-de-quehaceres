const Tarea = ({ tarea, onEliminar, onAlternar }) => {
    return (
        <li>
            <span
                style={{
                    textDecoration: tarea.completada ? "line-through" : "none",
                }}
            >
                {tarea.texto}
            </span>
            <input
                type="checkbox"
                checked={tarea.completada}
                onChange={onAlternar}
            />
            <button onClick={onEliminar}>Eliminar</button>
        </li>
    );
};

export default Tarea;
