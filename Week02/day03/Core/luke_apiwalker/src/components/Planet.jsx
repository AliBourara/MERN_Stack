import React from 'react'
import axios from 'axios'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'

const Planet = (props) => {
    const [planet, setPlanet] = useState('')
    const { planetId } = useParams()
    useEffect(() => {
        if (planetId)
            axios.get(`https://swapi.dev/api/planets/${planetId}`)
                .then(response => setPlanet(response.data))
                .catch(err => console.log(Error))
    }, [planetId])

    if (!planetId) return <h1>Please select an id...</h1>
    return (
        <>
            {planet ?
                <div className='d-flex flex-column align-items-start'>
                    <h1>{planet.name}</h1>
                    <br />
                    <h2>Climate : {planet.climate}</h2>
                    <h2>Rotation period :{planet.rotation_period}</h2>
                    <h2>Population :  {planet.population}</h2>
                    <h2>Terrain : {planet.terrain}</h2>
                </div>
                : <h1>Loading...</h1>
            }
        </>
    )
}

export default Planet