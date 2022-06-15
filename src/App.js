import React from 'react';
import { ReactDOM } from 'react';
import Counter from './Counter';
import CounterCreateStore from './CounterCreateStore';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <h1>Counter</h1>
      <Counter />
      <h1>CounterCreateStore</h1>
      <CounterCreateStore />
    </div>
  );
}

export default App;
