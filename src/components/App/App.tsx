import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Header from '../Header';
import './App.css';
import Container from '../../Shared/Container';
import Table, { TableHeader } from '../../Shared/Table';
import fakeProducts, { Product } from '../../Shared/Table/Table.mockdata';
import ProductsForm, { ProductCreator } from '../Products/ProductForm';
import { getAllProducts } from '../../services/Products.services';


const header: TableHeader[] = [
  { key: '', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true},
]


function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(fakeProducts[0])
  
  useEffect(()=>{
    async function fetchData() {
      const _products = await getAllProducts()
      setProducts(_products)
    }

    fetchData()
  },[])
  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        _id: String(products.length + 1),
        ...product
      }
    ])
  }
  
  const handleProcuctUpdate = (newProduct: Product) => {
   setProducts(products.map( product => 
     product._id === newProduct._id
       ? newProduct
       : product
   ))

    setUpdatingProduct(undefined)
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product Detail',
      `${product.name} costs US$ ${product.price} and we have ${product.stock} avaliable in stock.`,
      'info'
    )
  }

  const handleProductDelete = (product: Product) => {
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
       productDelete(String(product._id))
       Swal.fire(
         'Deleted!',
         'Your Product has been deleted.',
         'success'
       )
      }
    })
  }

  const productDelete = (productID: string) => {
    setProducts(products.filter(product => product._id !== productID))
  }
  return (
    <div className="App">
      <Header title="Alga-Stock"/>
      
      <Container>
        <Table 
          headers={header}
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
