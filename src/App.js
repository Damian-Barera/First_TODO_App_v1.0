import React from "react";
import { TodoProvider } from "./Components/TodoContext";
import { AppUI } from "./Components/AppUI";


const App = () => {

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
};

export default App;






