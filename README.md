# React Notes

## Embedding Expressions in JSX
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
This way you can but a string into a jsx expression

## JSX represents objects
    const element = (
        <h1 className="greeting">
        Hello, world!
        </h1>
    );
This is exactly the same as the example below

    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

## Rendering an Element into the DOM

Since React 18 we use a different syntax.       
First we need to select the root folder where all our html is gonna be placed.
    
    const root = ReactDOM.createRoot(
    document.getElementById('root')
    );
After that we can call the the **root.render()** function which will render whats inside the () into the DOM

## Function components

This is the most up to date way to make a component     
Components are basically JS functions

    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }

This is a React Component that asks for a parameter

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    
    const element = <Welcome name="Sara" />;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
    
Here we make an element that has the **Welcome** component and we give through a name "Sara"
All whats given though is defined as props which stands for properties.     
In this example we give though a name and we can acces it by doing props.name


