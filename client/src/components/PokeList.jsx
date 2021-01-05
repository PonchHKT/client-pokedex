import React from 'react';
import PokemonCard from './PokemonCard';

const PokeList = ({stats}) =>{
    return(
        <div className='pokelist'>
            {
             stats.map(pokemon =><PokemonCard key={pokemon.numéro} stats={pokemon}/>)
            }
        </div>
    )
}
export default PokeList;