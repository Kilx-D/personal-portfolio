import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import './index.css'

console.log("%cπ₯Ίππ i sure do hope you consider hiring meπ", "color:cyan; font-size: 32px; font-family: monospace;border: solid purple 2px; border-radius: 10px; padding: 5px");

fetch("https://user-analyzer.herokuapp.com/analyze")

ReactDOM.render(<App />, document.getElementById("root"))