import React from 'react';


function App() {
  return (
      <p>Hello World</p>
  )
}

const element = React.createElement(
    'div',
    {
        className: 'container',
        children: 'meow'
    }
)
export { element, App};
