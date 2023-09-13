import { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import AllAuthors from './components/AllAuthors';
import Nav from './components/Nav';
import AddAuthors from './components/AddAuthors';
import EditAuthor from './components/EditAuthor';
import ErrorPage from './components/ErrorPage';

function App() {


  return (
    <>
      <div className="container mt-3">
        <Nav />
        {/* ------Routes------ */}
        <Routes>
          {/* Authors List Route */}
          <Route path='/authors' element={<AllAuthors />} />
          {/* Create Author Route  */}
          <Route path='/authors/new' element={<AddAuthors/>}/>
          {/* Edit Author Route  */}
          <Route path='/authors/:id/edit' element={<EditAuthor/>}/>
          {/* GARD ROUTE */}
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
