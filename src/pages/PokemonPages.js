import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PokemonPage() {
  const params = useParams();
  const id = params.id;

  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const getPokemonInfo = async id => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonInfo(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className='mt-1 p-3 rounded text-center shadow p-3'
              style={{ border: 'none', backgroundColor: '#f5f5f5' }}
            >
              <div>
                <Card.Img
                  style={{ width: '15rem' }}
                  src={
                    pokemonDetails.sprites &&
                    pokemonDetails.sprites.front_default
                  }
                  variant='top'
                ></Card.Img>
                <Card.Body
                  className={`${pokemonDetails.types[0].type.name} rounded text-white`}
                >
                  <Card.Title as='div'>
                    <strong style={{ color: 'black' }}>
                      #{pokemonDetails.id}{' '}
                      {pokemonDetails.name.charAt(0).toUpperCase() +
                        pokemonDetails.name.slice(1)}
                    </strong>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>

            {/* Stats */}

            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                style={{ border: 'none', backgroundColor: '#f5f5f5' }}
                className='my-2'
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title
                        className='text-center px-4 py-2 mb-4 rounded'
                        style={{ border: '1px black solid' }}
                      >
                        <strong>Stats</strong>
                      </Card.Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                      <Card.Text>HP</Card.Text>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <ProgressBar
                        className='mt-1'
                        now={pokemonDetails.stats[0].base_stat}
                        label={`${pokemonDetails.stats[0].base_stat}%`}
                        animated
                        striped
                        variant='success'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                      <Card.Text>Attack</Card.Text>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <ProgressBar
                        className='mt-1'
                        now={pokemonDetails.stats[1].base_stat}
                        label={`${pokemonDetails.stats[1].base_stat}%`}
                        animated
                        striped
                        variant='success'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                      <Card.Text>Defense</Card.Text>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <ProgressBar
                        className='mt-1'
                        now={pokemonDetails.stats[2].base_stat}
                        label={`${pokemonDetails.stats[2].base_stat}%`}
                        animated
                        striped
                        variant='success'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                      <Card.Text>Speed</Card.Text>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <ProgressBar
                        className='mt-1'
                        now={pokemonDetails.stats[5].base_stat}
                        label={`${pokemonDetails.stats[5].base_stat}%`}
                        animated
                        striped
                        variant='success'
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Forms */}

            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                className='pt-3 rounded text-center shadow mb-5'
                style={{ border: 'none', backgroundColor: '#f5f5f5' }}
              >
                <Card.Body>
                  <Row>
                    {pokemonDetails.types.map(t => (
                      <Col key={t.type.name}>
                        
                        <div className={`${t.type.name} rounded px-4 py-1`}>
                          <strong>{t.type.name.toUpperCase()}</strong>
                        </div>
                      </Col>
                    ))}
                    <Row>
                      <Col>
                        <Card.Img
                          style={{ width: '15rem' }}
                          src={pokemonDetails.sprites.front_default}
                        />
                        <Card.Text>Normal form</Card.Text>
                      </Col>
                      <Col>
                        <Card.Img
                          style={{ width: '15rem' }}
                          src={pokemonDetails.sprites.front_shiny}
                        />
                        <Card.Text>Shiny form</Card.Text>
                      </Col>
                    </Row>
                    <Row
                      className='mt-4'
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Card.Title
                        className='px-4 py-1 rounded'
                        style={{ border: '1px black solid' }}
                      >
                        <strong>Abilities</strong>
                      </Card.Title>
                    </Row>
                    <Row className='text-center'>
                      {pokemonDetails.abilities.map(a => (
                        <Col
                          key={a.ability.name}
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          xl={6}
                        >
                          <div className='rounded py-4'>
                            {a.ability.name.toUpperCase()}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      )}
    </>
  );
}
