import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProduct from './components/AllProduct'
import OneProduct from './components/OneProduct';

function App() {

  return (
    <>
        <Routes>
        <Route path='/' element={
          <>
          <AddProduct/>
          <AllProduct/>
          </>
        } />
        <Route path='/:id' element={
          <>
          <OneProduct/>
          </>
        }/>
      </Routes>
    </>
  )
}

export default App
