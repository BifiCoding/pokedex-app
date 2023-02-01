import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logo from '../img/pokedex.png';

const Header = () => {
  const navigateTo = useNavigate();

  const handleLogoClick = () => {
    navigateTo(`/`);
  };

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
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
