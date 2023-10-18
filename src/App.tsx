import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Hello world!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
