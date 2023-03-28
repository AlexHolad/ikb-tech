import React from 'react'
import { Route, Routes } from "react-router-dom"

import './App.css';

import {data} from './data/data'

import Home from './pages/Home'
import Datenschutz from './pages/Datenschutz'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="/impressum" element={<Home data={data}/>} />
      <Route path="/datenschutz" element={<Datenschutz/>} />
      <Route path="/bilder-lizenz" element={<Home data={data}/>} />
    </Routes>
  );
}

export default App;
