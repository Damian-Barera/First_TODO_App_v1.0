import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css';

const TodoSearch = () => {

    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <>
            <input
            className="TodoSearch" 
            value={searchValue}
            onChange={onSearchValueChange}
            placeholder="Busca tu tarea aqui" />
        </>
    )
};

export {TodoSearch};