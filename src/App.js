import React from 'react'
import { Route, Routes } from "react-router-dom"

import './App.css';

import {data} from './data/data'

import Home from './pages/Home'
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz'
import Bilder from './pages/Bilder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="/impressum" element={<Impressum/>} />
      <Route path="/datenschutz" element={<Datenschutz/>} />
      <Route path="/bilder-lizenz" element={<Bilder />} />
    </Routes>
  );
}

export default App;
