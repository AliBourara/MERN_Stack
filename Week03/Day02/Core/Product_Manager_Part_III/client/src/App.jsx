import './App.css'
import { Routes, Route } from 'react-router-dom'
import OneProduct from './components/OneProduct';
import Home from './views/home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/:id' element={
          <>
            <OneProduct />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
