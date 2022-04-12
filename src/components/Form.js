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
        <div>
            <h2>Add a ToDo</h2>
            <input ref={inputRef} type="text" name="todo"/>
            <button onClick={() => props.changeWord(clickHandler)}>Add todo</button>
            <hr/>
        </div>
    );
}

export default Form;