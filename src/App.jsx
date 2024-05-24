/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

// import packages

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// import all pages
import Counter from './pages/Counter'
import TextEditor from './pages/TextEditor'
import Form from './pages/Form'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/user' element={<Form />} />
        <Route path='/editor' element={<TextEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
