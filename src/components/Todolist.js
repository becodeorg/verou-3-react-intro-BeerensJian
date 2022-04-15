import React, {useEffect, useState} from "react";
import Edit from "./Edit";


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
    const copyOfTodos = [...todos];
    
    useEffect(() => {
        if (props.addedTodo !== '') {

            const newTodo = {
                text: props.addedTodo,
                state: false,
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

    // TODO: show Edit compnent under a todo when doubleclicked
    function editTodo(index) {
        const toEditTodo = localTodos[index]
        const newTodoObject = {
            text: toEditTodo.text,
            state: false,
        }
        if (toEditTodo.state === true) {

            const newArray = [...todos]
            newArray.splice(index, 1, newTodoObject);
            setTodos(newArray);
        } else {
            newTodoObject.state = true;
            const newArray = [...todos]
            newArray.splice(index, 1, newTodoObject);
            setTodos(newArray);
        }
    }

    
    
    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
      });

    return (
        <div>
        
        <ul className="card">
            {todos.map((todo, index) => (
                
                <li key={"Key" + index}> 
                    <input type="checkbox" onChange={() => isDone(index)}/> <span onDoubleClick={() => editTodo(index)}>{todo.text} <button className="deleteButton" onClick={() => deleteTodo(todo.text)}>❌</button></span>
                    {todo.state === true ? <Edit updateTodos={todos => setTodos(todos)} todoValue={todo} todoIndex={index} todosState={copyOfTodos}/> : null}
                </li>
                
                
            ))}
            
        </ul>
        </div>
        
    )
}