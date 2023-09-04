import React from 'react'
import { useState } from 'react'

const Cubeform = (props) => {
    const [cube, setCube] = useState({ color: "" })
    const createCube = (e)=>{
        e.preventDefault()
        props.chooseColor(cube)
        setCube({ color: "" })
    }
    return (
        <div>
            <form onSubmit={createCube}>
                <h2>Color : <input type="text" onChange={(e) => setCube({ ...cube,color: e.target.value })}
                    value={cube.color}/> </h2>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Cubeform
