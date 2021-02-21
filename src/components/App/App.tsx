import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts from '../../Shared/Table/Table.mockdata';
import Form from '../../Shared/Form';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import ProductsForm from '../Products/ProductForm';

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
        
        <ProductsForm/>
      </Container>
    </div>
  );
}

export default App;
