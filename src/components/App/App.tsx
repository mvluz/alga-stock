import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../Shared/Container';
import Table from '../Shared/Table';

function App() {
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
