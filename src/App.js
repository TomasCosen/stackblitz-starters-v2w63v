import React, { useEffect, useState } from 'react';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API de PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then((data) => {
        // Extraer los nombres de los primeros 10 Pokémon
        const pokemonNames = data.results.map((pokemon) => pokemon.name);
        setPokemonList(pokemonNames);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
      });
  }, []);

  return (
    <div>
      <h1>Primeros 10 Pokémon</h1>
      <ul>
        {pokemonList.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
