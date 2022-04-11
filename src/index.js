import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, element} from './App';

const val = element;

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function tick() {
    const timeElement = (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
    root.render(timeElement)
}

setInterval(tick, 1000)
console.log(val);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

