
function Edit(props) {

    function updateTodo() {
        
    }

    return (
        <div>
            <input type="text" defaultValue={props.todoValue.text} />
            <button onClick={updateTodo}>Save</button>
        </div>
        
    )
}

export default Edit;