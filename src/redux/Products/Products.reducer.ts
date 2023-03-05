export interface Action<T = any>{
    type: String
    payload?: T
}
export default function (state = [], action: Action){
    switch(action.type){
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}