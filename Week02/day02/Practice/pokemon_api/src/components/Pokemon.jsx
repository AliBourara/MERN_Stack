// import React from 'react'
// import { useState } from 'react'

// const Pokemon = () => {
//     const [pokemons, setPokemons] = useState([])
//     const fetchPokemon = () =>{
//         fetch("https://pokeapi.co/api/v2/pokemon.json")
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 setPokemons(jsonResponse) 
//             })
//             .catch(error => console.log(error))
//     }
//     return (
//         <fieldset>
//             <legend><h1>Gotta catch them all</h1></legend>
//             <button onClick={fetchPokemon()}>Fetch Pokemon</button>
//             <fieldset>
//             <legend><h2>Pokemon</h2></legend>
//             <table>
//                 <thead>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Image</th>
//                 </thead>
//                 <tbody>
//                     {pokemons.map(pokemon => <tr key={pokemons.id}>
//                         <td>{pokemons.id}</td>
//                         <td>{pokemons.name}</td>
//                         <td><img src={pokemons.sprites.front_default} alt={pokemons.name} /></td>
//                     </tr> )}
//                 </tbody>
//             </table>
//             </fieldset>
//         </fieldset>
//     )
// }

// export default Pokemon