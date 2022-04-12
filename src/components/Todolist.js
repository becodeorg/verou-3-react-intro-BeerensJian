import React, {useState} from "react";

export default function Todolist() {
    const InitialTodos = ["My first Todo", "And a second one"]
    const [todos, setTodos] = useState(InitialTodos);
    return (
        <ul>
            {todos.map((todo, index ) => (
                <li>
                    <label htmlFor="">
                        <input type="checkbox" key={"key" + index}/> {todo}
                        
                    </label>
                </li>
            ))};
        </ul>
    )
}