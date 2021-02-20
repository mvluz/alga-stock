import React from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts from '../../Shared/Table/Table.mockdata';
import Form from '../../Shared/Form';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';

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
        
        <Form title="Product Form" onSubmit={console.log}>
          <Input
            label="Name"
            placeholder="e.g.: Cookie"          
          />          
          <Input
            label="Price"
            type="number"
            step="0.01"
            min="0"            
            placeholder="e.g.: 1.25"          
          />
          <Input
            label="Stock"
            type="number"
            min="0"
            placeholder="e.g.: 1"          
          />
          <Button>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
