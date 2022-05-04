import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import './index.css'

fetch("https://user-analyzer.herokuapp.com/analyze")

ReactDOM.render(<App />, document.getElementById("root"))