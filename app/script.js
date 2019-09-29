import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './components/examples';
import './style.css';

const App = () => (
  <Examples/>
);

ReactDOM.render(<App />, document.querySelector('#root'));