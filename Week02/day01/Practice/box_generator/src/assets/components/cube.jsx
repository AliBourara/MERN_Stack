import React from 'react'
import './cube.css'

const Cube = ({ cubes }) => {
    return (
        <div>
            {cubes.map((cubes, id) => <div key={id} className='cubes' style={{ backgroundColor: cubes.color }}>
            </div>)}
        </div>
    )
}

export default Cube
