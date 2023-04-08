import React, { useState } from 'react';
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../img/pokedex.png';
import SearchBar from './SearchBar';
import SearchResList from './SearchResList';

const Header = () => {
  const navigateTo = useNavigate();

  const handleLogoClick = () => {
    navigateTo(`/`);
  };

  const [result, setResult] = useState([]);

  return (
    <header
      style={{
        backgroundColor: '#e3202a',
        shadow: 'black',
        borderRadius: '0px 0px 12px 12px',
      }}
    >
      <Navbar variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <img
            src={logo}
            style={{ width: 140, height: 55, cursor: 'pointer' }}
            onClick={handleLogoClick}
          />

          <div style={{ position: 'relative'}} id='search'>
            
            <SearchBar setResult={setResult} />
            {result.length > 0 && (
              <div
                className='searchResList'
                style={{
                  position: 'absolute',
                  top: '100%',
                  zIndex: 999,
                  backgroundColor: 'white',
                  width: '100%',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                <SearchResList result={result} id='list'/>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
