import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({name, id, weight, height, types, stats, sprites}) => {
  
  const pokeTypes = types.map(type => 
    type.type.name.toUpperCase()).join(", ");

  const newName = name.toUpperCase();
  const spriteUrl = sprites.front_default;

  return (
    <div>
        
        <div>
            <img className='image' src={spriteUrl}/>
        </div>

        <div className='name_id'>
            <p>{`${newName}`}</p>
            <p>{`#${id}`}</p>
        </div>

        <div>
            <p>{`Types: ${pokeTypes}`}</p>
        </div>

        <div>
            <p>{`Weight: ${weight}`}</p>
            <p>{`Height: ${height}`}</p>
        </div>

        <div>
            <p>{`HP: ${stats[0].base_stat}`}</p>
            <p>{`Attack: ${stats[1].base_stat}`}</p>
            <p>{`Defense: ${stats[2].base_stat}`}</p>
            <p>{`Speed: ${stats[5].base_stat}`}</p>
            <p>{`Sp. Attack: ${stats[3]['base_stat']}`}</p>
            <p>{`Sp. Defense: ${stats[4].base_stat}`}</p>
        </div>
    
    </div>
  )
};

export default PokemonCard