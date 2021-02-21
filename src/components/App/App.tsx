import React, { useState } from 'react';
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts, { FakeProduct } from '../../Shared/Table/Table.mockdata';
import ProductsForm, { ProductCreator } from '../Products/ProductForm';

const fakeCabecalho: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true},
]


function App() {
  const [products, setProducts] = useState(fakeProducts)
  const [updatingProduct, setUpdatingProduct] = useState<FakeProduct | undefined>(fakeProducts[0])

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }
  
  const handleProcuctUpdate = (newProduct: FakeProduct) => {
    setProducts(products.map( product => 
      product.id === newProduct.id
        ? newProduct
        : product
    ))

    setUpdatingProduct(undefined)
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
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProcuctUpdate}
        />
      </Container>
    </div>
  );
}

export default App;
