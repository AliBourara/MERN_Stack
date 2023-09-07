import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import People from './components/People'
import Planet from './components/Planet';
import Error from './components/Error';
import { useNavigate,useParams } from 'react-router-dom';

function App() {
  const [thatID, setThatId] = useState(0)
  const [type, setType] = useState('Options')
  

  const navigate = useNavigate()
  const fetchId = (e) => {
    e.preventDefault()
    if (thatID && type)
      navigate(`/${type}/${thatID}`)

  }


  return (
    <>
      <div className='d-flex'>
        <label className='me-2'>Search For :</label>
        <div className="dropdown me-2">
          <button style={{ width: "11rem" }} className="btn btn-white border-dark  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {type}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
            <li><Link className="dropdown-item" to={"/people"} onClick={() => setType("people")} >People</Link></li>
            <li><Link className="dropdown-item" to={"/planets"} onClick={() => setType("planets")} >Planet</Link></li>
          </ul>
        </div>
        <label className='me-2'>ID : </label>
        <form onSubmit={fetchId}>
          <input className='me-2 ' style={{ width: "4rem" }} type="number" onChange={(e) => setThatId(e.target.value)} value={thatID} />
          <button className='me-2 bg-info text-white' >Search</button>
        </form>
      </div>
      <br />
      <Routes>
        <Route path='/people' element={<People />} />
        <Route path='/people/:peopleId' element={<People />} />
        <Route path='/planets' element={<Planet />}></Route>
        <Route path='/planets/:planetId' element={<Planet />}></Route>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
