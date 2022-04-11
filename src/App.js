import React from 'react';


function App() {
  return (
      <div>
          <p>Hello World</p>
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
export { element, App};
