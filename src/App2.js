import Todolist from "./components/Todolist";
import Form from "./components/Form";
import { useState } from "react";

function App2() {
    
    const [ todotext , setToDoText] = useState('');
    


    return (
        <div>
        <h1>My todolist {todotext}</h1>
        <Form changeWord={todotext => setToDoText(todotext)} />
        <Todolist addedTodo={todotext} />
        </div>
    )

}

export default App2;