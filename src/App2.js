import Todolist from "./components/Todolist";
import Form from "./components/Form";
import { useState } from "react";

function App2() {
    
    const [ todotext , setToDoText] = useState('parent');


    return (
        <div>
        <h1>{todotext}</h1>
        <Form 
            changeWord={todotext => setToDoText(todotext)} />

        <Todolist />
        </div>
    )
}

export default App2;