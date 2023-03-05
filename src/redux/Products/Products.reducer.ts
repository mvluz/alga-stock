import fakeProducts, { Product } from "../../Shared/Table/Table.mockdata"

export interface Action<T = any> {
    type: String
    payload?: T
}
export default function (state = fakeProducts, action: Action): Product[] {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length + 1)

            }]
        default:
            return state
    }
}