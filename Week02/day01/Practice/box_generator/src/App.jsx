import { useState } from 'react'
import './App.css'
import Cubeform from './assets/components/Cubeform'
import Cube from './assets/components/cube'

function App() {
  const [cubes, setCubes] = useState([
    { color: "" }])
  const chooseColor = (newCube) => {
    setCubes([...cubes,newCube])
  }

  return (
    <>
      <Cubeform chooseColor={chooseColor}/>
      <Cube cubes= {cubes}/>
    </>
  )
}

export default App
