import {legacy_createStore, combineReducers} from 'redux'
import Products from './Products/Products.reducer'

const reducers = combineReducers({
    products : Products
})

const store = legacy_createStore(
    reducers,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store