import { useRef } from "react";

function Edit(props) {
    const editInput = useRef()

    function updateTodo() {
        const editCurrent = editInput.current;
        console.log(editCurrent.value);
        const newTodoObject = {
            text: editCurrent.value,
            state: false,
        };
        props.todosState.splice(props.todoIndex, 1, newTodoObject);
        console.log(props.todosState);
        return props.todosState;
    }

    return (
        <div>
            <input ref={editInput} type="text" defaultValue={props.todoValue.text} />
            <button onClick={() => props.updateTodos(updateTodo)}>Save</button>
        </div>
        
    )
}

export default Edit;