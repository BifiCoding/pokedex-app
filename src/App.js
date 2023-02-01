import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPages';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Router>
        <Container>
        <Header />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/pokemon/:id' element={<PokemonPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}
