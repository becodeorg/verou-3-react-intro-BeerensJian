import React, {useEffect, useState} from "react";

const LSKEY = "myTodoList";

export default function Todolist(props) {

    
    const InitialTodos = [
        {
            text: "text of todo 1",
            state: false,
        },
        {
            text:"text of todo 2 or another one",
            state: false,
        },
    ];

    
    const localTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos")) || InitialTodos;
    const [todos, setTodos] = useState(localTodos);

    
    useEffect(() => {
        if (props.addedTodo !== '') {

            const newTodo = {
                text: props.addedTodo,
                status: false,
            }
            setTodos([...todos, newTodo])
        }
        
    },[props.addedTodo]);
    

    function deleteTodo(text) {
        const newArray = todos.filter( item => item.text !== text);
        setTodos(newArray);
    };

    function isDone(index) {
        const listElements = document.querySelectorAll('li span')
        if (listElements[index].classList.contains('strip-through')) {
            listElements[index].classList.remove('strip-through');
        } else {
            listElements[index].classList.add("strip-through");
        }  
    };

    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
      });

    return (

        <ul>
            {todos.map((todo, index) => (

                <li key={"Key" + index}> 
                    <input type="checkbox" onChange={() => isDone(index)}/> <span>{todo.text} <button onClick={() => deleteTodo(todo.text)}>Delete</button></span>  
                </li>
            ))}
        </ul>
    )
}