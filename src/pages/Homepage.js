import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { animateScroll as scroll } from "react-scroll";


import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';
import PaginationBtn from '../components/Pagination';

export default function Homepage() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=30`
  );
  const [nextPageUrl, setNextPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [prevPageUrl, setPrevPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );

  useEffect(() => {
    axios.get(currentPageUrl).then(response => {
      if (response.status >= 200 && response.status < 300) {
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setPokemon(response.data.results);
        setLoading(false);
      }
    });
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
    scroll.scrollToTop();
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
    scroll.scrollToTop();
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {pokemon.map(p => (
            <Col key={p.name} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Pokemon data={p} />
            </Col>
          ))}

          <PaginationBtn
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </Row>
      )}
    </>
  );
}
