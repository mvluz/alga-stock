import { Product } from '../Shared/Table/Table.mockdata'
import http from '../utils/http'

export const getAllProducts = () =>
    http
        .get<Product[]>('http://localhost:3024/products')
        .then(response => response.data)