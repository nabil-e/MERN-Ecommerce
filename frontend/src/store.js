import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducer'

const reducer = combineReducers({})

const initialState = {}

const store = configureStore({
    reducer: {
        productList: productListReducer
    }
})

export default store