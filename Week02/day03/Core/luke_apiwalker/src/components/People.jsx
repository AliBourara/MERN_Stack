import React from 'react'
import axios from 'axios'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const People = (props) => {
    const baseUrl = "https://swapi.dev/api"
    const [people, setPeople] = useState('')
    const { peopleId } = useParams()
    const [homeLand,setHomeLand] = useState ('')
    const navigate =useNavigate()

    useEffect(() => {
        if (peopleId)
            axios.get(`${baseUrl}/people/${peopleId}`)
                .then(response => {
                    setPeople(response.data)
                    axios.get(response.data.homeworld).then(rep => setHomeLand(rep.data)).catch(err => navigate('/error'))
                    console.log(homeLand)
                })
                .catch(err => navigate('/error'))
            
    }, [peopleId])
    
    if (!peopleId) return <h1>Please select an id...</h1>
    return (
        <>
            {people?
                <div className='d-flex flex-column align-items-start'>
                    <h1>{people.name}</h1>
                    <br />
                    <h2>Height : {people.height}</h2>
                    <h2>Hair Color : {people.hair_color}</h2>
                    <h2>Home world  : <a className="pe-auto" style={{cursor: "pointer"}} onClick={()=>{navigate(homeLand.url.replace(baseUrl,""))}} >{homeLand.name}</a></h2>
                    <h2>Birth Year : {people.birth_year}</h2>
                </div>
                :<h1>Loading...</h1>
            }
        </>
    )
}

export default People