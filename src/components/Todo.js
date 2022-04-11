// eslint-disable-next-line no-undef
import React, {useState} from "react";
import Modal from './Modal';
import Backdrop from "./Backdrop";


const Todo = (props) => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const cancelDelete = () => {
        setModalIsOpen(false);
    }

    const handleDelete = () => {
        setModalIsOpen(true);
    }


    console.log(props)
    return (
        <div className='card'>
            <h1>{props.name}</h1>
            <p>something I have to do</p>
            <div className='actions'>
                <button className='btn' onClick={handleDelete}>Delete</button>
            </div>
            { modalIsOpen ? <Modal/> : null}
            { modalIsOpen ? <Backdrop onClick={cancelDelete}/> : null}

        </div>
    )
}
export default Todo;