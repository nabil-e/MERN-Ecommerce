import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'

//const reducer = combineReducers({})

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer
    }
})

export default store