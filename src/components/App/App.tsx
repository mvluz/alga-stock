import React, { useState } from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts from '../../Shared/Table/Table.mockdata';
import ProductsForm, { ProductCreator } from '../Products/ProductForm';

const fakeCabecalho: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true},
]


function App() {
  const [products, setProducts] = useState(fakeProducts)

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }
  
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Table 
          headers={fakeCabecalho}
          data={products}
        />
        
        <ProductsForm
          onSubmit={handleProductSubmit}
        />
      </Container>
    </div>
  );
}

export default App;
