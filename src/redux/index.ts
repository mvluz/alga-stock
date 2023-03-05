import {legacy_createStore, combineReducers} from 'redux'
import Products from './Products/Products.reducer'

const reducers = combineReducers({
    products : Products
})

const store = legacy_createStore(reducers)

export default store