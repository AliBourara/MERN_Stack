import { useState } from 'react'
import './App.css'
import { Route, Routes,Link } from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
function App() {

  return (
    <>
    <Link to='/home'></Link>
    <Routes>
      <Route path={'/home'} element = {<Home/>}/>  
      <Route path={'/:word'} element = {<Word/>}>
        <Route path={':text'} element = {<Word/>}/>
        <Route path={':text/:bg'} element = {<Word/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
