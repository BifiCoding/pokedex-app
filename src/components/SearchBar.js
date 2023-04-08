import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export default function SearchBar({setResult}) {
  const [input, setInput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = value => {
    setInput(value);
    pokemonData(value);
  };

  const pokemonData = value => {
    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.includes(value.toLowerCase()));
    setResult(filteredPokemon)
  };

  return (
    <div
      className='input-wrapper shadow px-2'
      style={{
        backgroundColor: 'white',
        display: 'flex',
        height: '35px',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FaSearch className='mx-2' style={{ color: '#476694' }} />
      <input
        placeholder='Search a pokemon'
        style={{ border: 0, fontSize: '1.05em', borderRadius: 5 }}
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}
