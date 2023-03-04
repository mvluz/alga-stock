import React, { useState } from 'react';
import Swal from 'sweetalert2'
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

  const handleProductEdit = (product: FakeProduct) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: FakeProduct) => {
    Swal.fire(
      'Product Detail',
      `${product.name} costs US$ ${product.price} and we have ${product.stock} avaliable in stock.`,
      'info'
    )
  }

  const handleProductDelete = (product: FakeProduct) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    }).then((result) => {
      if (result.isConfirmed) {
        productDelete(product.id)
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })
  }

  const productDelete = (productID: number) => {
    setProducts(products.filter(product => product.id !== productID))
  }
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Table 
          headers={fakeCabecalho}
          data={products}
          enableActions
          onDelete = {handleProductDelete}
          onDetail = {handleProductDetail}
          onEdit = {handleProductEdit} 
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
