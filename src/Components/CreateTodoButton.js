import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {

    const createTask = () => {
        props.setOpenModal(prevState => !prevState);
    }


    return(
        <>
            <button 
            onClick={createTask}
            className='CreateTodoButton'>
                +
            </button>
        </>
    )
};

export {CreateTodoButton};