import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const [pokemons, setPokemons] = useState([])
    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807.json")
            // .then(response => response.json())
            .then(jsonResponse => {
                console.log("RESPONSE FROM API : ", jsonResponse)
                setPokemons(jsonResponse.data.results) //?
            })
            .catch(error => console.log(error))
    }
    return (
        <fieldset>
            <legend><h1>Gotta catch them all</h1></legend>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <fieldset>
                <legend><h2>Pokemon</h2></legend>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {pokemons.map((pokemon, id) => <tr key={id}>
                            <td>{id}</td>
                            <td>{pokemon.name}</td>
                        </tr>)}
                    </tbody>
                </table>
            </fieldset>
        </fieldset>
    )
}


export default App
