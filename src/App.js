import React from 'react';
import Todo from './components/Todo'

function App() {
    return (
        <div>
            <h1>My Todolist</h1>
            <Todo />
            <Todo />
            <Todo />
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
