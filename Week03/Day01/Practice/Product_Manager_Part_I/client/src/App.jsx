import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'

function App() {

  return (
    <>
        <Routes>
        <Route path='/' element={
          <>
          <AddProduct/>
          </>
        } />
      </Routes>
    </>
  )
}

export default App
