import React, { useState } from 'react'
import Button from '../../Shared/Button'
import Form from '../../Shared/Form'
import Input from '../../Shared/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps{
    onSubmit: (product: ProductCreator) => void
}

const ProductsForm: React.FC<ProductFormProps> = (props) => {
    const [form,setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        const productDTO = {
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number(form.stock)
        }

        props.onSubmit(productDTO)
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