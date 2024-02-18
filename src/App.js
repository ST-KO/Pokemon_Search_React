import React from 'react';
import { useState } from 'react';
import PokemonCard from './components/PokemonCard';

import "./App.css";


const dataUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const App = () => {
  const [input, setInput] = useState('');
  const [pokemonData, setPokemonData] = useState(null); 
  
  const fetchData = async() => {
    try{
      const res = await fetch(`${dataUrl}${input.toLowerCase()}`);
      if(!res.ok){
        alert("Pokémon not found");
        throw new Error ("could not fetch data");
      }
      const data = await res.json();
      setPokemonData(data);
    } catch (error){
      console.log(error);
    }

  };

  return (
    <div className='search'>

      <div >

        <h2>Search for Pokemon Name or Id: </h2>

        <input
        className='search_bar'
        type = "text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        />
        
        <button onClick={fetchData}>Search</button>

      </div>
      

      <div>
        {pokemonData && <PokemonCard{...pokemonData} />}
      </div>
      
    </div>
  );
};

export default App;