import React, { useEffect, useState } from 'react'
import Button from '../../Shared/Button'
import Form from '../../Shared/Form'
import Input from '../../Shared/Input'
import { FakeProduct } from '../../Shared/Table/Table.mockdata'

declare interface InitialFormState{
  id?: number
  name: string
  price: string
  stock: string  
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps{
    form?: FakeProduct
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: FakeProduct) => void
}

const ProductsForm: React.FC<ProductFormProps> = (props) => {
    const initialFormState: InitialFormState = props.form
    ? {
        id: props.form.id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock)
      }
    : {
        name: '',
        price: '',
        stock: ''
      }

    const [form,setForm] = useState(initialFormState)

    useEffect(() => {
      setForm(initialFormState)
    }, [props.form])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const updateProduct = (product: InitialFormState) => {
      const productDTO = {
        id: Number(product.id),
        name: String(product.name),
        price: parseFloat(product.price),
        stock: Number(product.stock)
      }

      props.onUpdate &&
       props.onUpdate(productDTO)
    }

    const CreateProduct = (product: InitialFormState) => {
      const productDTO = {
        name: String(product.name),
        price: parseFloat(product.price),
        stock: Number(product.stock)
      }

      props.onSubmit &&
       props.onSubmit(productDTO)
    }

    const handleFormSubmit = () => {
      form.id
        ? updateProduct(form)
        : CreateProduct(form)
        
      setForm(initialFormState)
    }

    return <Form title="Product" onSubmit={handleFormSubmit}
    >
          <Input 
            onChange={handleInputChange}
            value={form.name}
            name="name"
            label="Name"
            placeholder="e.g.: Cookie"
            required
          />          
          <Input 
            onChange={handleInputChange}
            value={form.price}
            name="price"
            label="Price"
            type="number"
            step="0.01"
            min="0"            
            placeholder="e.g.: 1.25"  
            required
          />
          <Input 
            onChange={handleInputChange}
            value={form.stock}
            name="stock"
            label="Stock"
            type="number"
            min="0"
            placeholder="e.g.: 1"
            required
          />
          <Button>
            Submit
          </Button>
    </Form>
}

export default ProductsForm