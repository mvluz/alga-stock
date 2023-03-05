import { ProductCreator } from '../components/Products/ProductForm'
import { Product } from '../Shared/Table/Table.mockdata'
import http from '../utils/http'

export const getAllProducts = () =>
    http
        .get<Product[]>('/products')
        .then(response => response.data)
export const createSingleProduct = (product: ProductCreator) =>
    http
        .post('/products', product)

export const updateSingleProduct = ({_id,name,price,stock}: Product) =>
http
    .patch(`/products/${_id}`, {
        ...(name && {name}),
        ...(price && {price}),
        ...(stock && {stock}),
    })

export const deleteSingleProduct = (productID: string) =>
http
    .delete(`/products/${productID}`)