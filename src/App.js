import React from 'react'

import './App.css';

import {data} from './data/data'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;
