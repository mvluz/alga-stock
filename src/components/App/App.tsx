import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import ProductCRUD from '../Products/ProductsCRUD';

function App() {

  return (
    <div className="App">
      <Header title="Alga-Stock" />
      <Container>
        <ProductCRUD/>
      </Container>
    </div>
  );
}

export default App;