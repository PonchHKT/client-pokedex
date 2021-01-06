import React from "react";

import PokemonCard from "./PokemonCard";

const Pokedex = ({pokemons}) => (

        <div className="pokedex">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.numéro}
              id={pokemon.numéro}
              ndex={pokemon.ndex}
              name={pokemon.nom}
            />
          ))}
        </div>
)

export default Pokedex;
