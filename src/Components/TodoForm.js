import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoForm.css';


const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);


    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value = { newTodoValue }
                onChange = {onChange}
                placeholder ="Escribe aqui tu tarea"
            />
            <div className="TodoForm-buttonContainer">
                
                <button
                    type = "button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                
                
                <button
                    type = "submit"
                    className= "TodoForm-button TodoForm-button--add"
                    onClick= {onSubmit}
                >
                    Añadir
                </button>

            </div>
        </form>
    );
};

export { TodoForm };