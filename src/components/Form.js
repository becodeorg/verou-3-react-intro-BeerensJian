import React, { useRef } from "react";

function Form(props) {

    const inputRef = useRef();
    function clickHandler() {
        const inputElement = inputRef.current;
        // do somethign with the input element
        const todo = inputElement.value;
        console.log(todo)
        
        return todo;

    }



    return (
        <div className="headercard">
            <h2>Add a Todo</h2>
            <input ref={inputRef} type="text" name="todo"/>
            <button className="button-30" onClick={() => props.changeWord(clickHandler)}>Add todo</button>

            
        </div>
    );
}

export default Form;