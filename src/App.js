import React, {useState} from 'react';
import Todo from './components/Todo';



function App() {
    return (
        <div>
            <h1>My Todolist</h1>
            <Todo name='Todo titel 1'/>
            <Todo name='Another title for a todo'/>
            <Todo name='Become a React PRO'/>


        </div>
    )
}

const element = React.createElement(
    'div',
    {
        className: 'container',
        children: 'meow'
    }
)
export {element, App};
