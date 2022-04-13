import React, {useEffect, useState} from "react";

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



    const [todos, setTodos] = useState(InitialTodos);

    
    useEffect(() => {
        if (props.addedTodo !== '') {

            const newTodo = {
                text: props.addedTodo,
                status: false,
            }
            setTodos([...todos, newTodo])
        }
        
    },[props.addedTodo]);
    

    // function checkDelete(text) {
    //     const newArray = todos.filter( item => item.text !== text);
    //     setTodos(newArray);
    // };
    function isDone(index) {
        const listElements = document.querySelectorAll('li p')
        if (listElements[index].classList.contains('strip-through')) {
            listElements[index].classList.remove('strip-through');
        } else {
            listElements[index].classList.add("strip-through");
        }
        
    }

    return (

        <ul>
            {todos.map((todo, index) => (
                
                <li key={"Key" + index}> 
                    <input type="checkbox" onChange={() => isDone(index)}/> <p>{todo.text}</p>  
                </li>
            ))}
        </ul>
    )
}