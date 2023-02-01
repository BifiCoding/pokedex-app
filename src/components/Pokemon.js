import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Pokemon({ data }) {
  const id = data.url.match(/\/(\d+)/)[1];

  const navigateTo = useNavigate();
  const handleCardClick = () => {
    navigateTo(`/pokemon/${id}`);
  };

  const [pokemonType, setPokemonType] = useState(null);

  useEffect(() => {
    const getPokemonType = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemonType(data.types[0].type.name);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonType();
  }, [id]);

  return (
    <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <Card
        className='my-3 p-3 rounded text-center shadow mb-2'
        style={{ border: 'none' }}
        id='card'
      >
        <div>
          <Card.Img
            style={{ width: '8rem' }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            variant='top'
          />

          <Card.Body
            className={pokemonType ? `${pokemonType} rounded text-white` : ''}
          >
            <Card.Title as='div'>
              <strong style={{ color: 'black' }}>
                #{id} {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </strong>
            </Card.Title>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
