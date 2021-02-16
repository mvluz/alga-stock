import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../Shared/Container';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" 
  alt="Seach icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>

      </Container>
    </div>
  );
}

export default App;
