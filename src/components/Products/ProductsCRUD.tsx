import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Table, { TableHeader } from '../../Shared/Table'
import { Product } from '../../Shared/Table/Table.mockdata'
import ProductsForm, { ProductCreator } from './ProductForm'
import {
    createSingleProduct,
    deleteSingleProduct,
    getAllProducts,
    updateSingleProduct
} from '../../services/Products.services'

const header: TableHeader[] = [
    { key: '', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true },
]

const ProductCRUD = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

    async function messageError(messagemTitle: string, error: any) {
        Swal.fire(messagemTitle, error.message, 'error')
    }

    async function fetchData() {
        const _products = await getAllProducts()
        setProducts(_products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleProductSubmit = async (newProduct: ProductCreator) => {
        try {
            await createSingleProduct(newProduct)
            await fetchData()
        } catch (error) {
            await messageError('Oopps!', error)
        }
    }

    const handleProcuctUpdate = async (product: Product) => {
        try {
            await updateSingleProduct(product)
            setUpdatingProduct(undefined)
            await fetchData()
        } catch (error) {
            await messageError('Oopps!', error)
        }
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
            }
        })
    }

    const productDelete = async (productID: string) => {
        try {
            await deleteSingleProduct(productID)
            setUpdatingProduct(undefined)
            await fetchData()
            Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
            )
        } catch (error) {
            await messageError('Oopps!', error)
        }
    }
    return <>
        <Table
            headers={header}
            data={products}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
        />

        <ProductsForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProcuctUpdate}
        />
    </>
}

export default ProductCRUD