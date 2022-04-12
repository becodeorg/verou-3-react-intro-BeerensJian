import React, {useState} from "react";

export default function Todolist(props) {
    const InitialTodos = [
        {
            text: "text of todo 1",
            state: false
        },
        {
            text:"text of todo 2 or another one",
            state: false,
        },
    ];



    const [todos, setTodos] = useState(InitialTodos);

    function checkDelete(text) {
        const newArray = todos.filter( item => item.text !== text);
        setTodos(newArray);
    };

    return (

        <ul>
            {todos.map((todo, index) => (
                
                <li key={"Key" + index}> 
                    <input type="checkbox" onChange={() => {checkDelete(todo.text)}}/> {todo.text}    
                </li>
            ))};
        </ul>
    )
}