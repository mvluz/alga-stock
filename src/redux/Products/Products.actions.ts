import { Product } from "../../Shared/Table/Table.mockdata"
import { Action } from "./Products.reducer"

export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: 'asd564as',
            name: 'Milk 1L',
            price: 0.35,
            stock: 700
        }
    }
}