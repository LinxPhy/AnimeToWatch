import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Action from './pages/Action'
import Mystery from './pages/Mystery'
import Romance from './pages/Romance'
import Classics from './pages/Classics'
import SliceOfLife from './pages/SliceOfLife'
import Sport from './pages/Sport'
import './App.css'

function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/10-action-anime-to-watch" element={<Action />} />
      <Route path="/10-mystery-anime-to-watch" element={<Mystery />} />
      <Route path="/10-romance-anime-to-watch" element={<Romance />} />
      <Route path="/10-classics-anime-to-watch" element={<Classics />} />
      <Route path="/10-slice-of-life-anime-to-watch" element={<SliceOfLife />} />
      <Route path="/10-sport-anime-to-watch" element={<Sport />} />
    </Routes>
  )

}

export default App
