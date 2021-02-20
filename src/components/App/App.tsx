import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts from '../../Shared/Table/Table.mockdata';

const fakeCabecalho: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true},
]


function App() {
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Table 
          headers={fakeCabecalho}
          data={fakeProducts}
        />
      </Container>
    </div>
  );
}

export default App;
