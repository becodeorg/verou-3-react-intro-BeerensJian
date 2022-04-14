
function Edit(props) {

    // function someFunc() {
        
    // }

    return (
        <div>
            <input type="text" defaultValue={props.todoValue.text} />
            <button >Save</button>
        </div>
        
    )
}

export default Edit;