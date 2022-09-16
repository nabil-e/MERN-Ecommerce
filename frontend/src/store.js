import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducer'

//const reducer = combineReducers({})

const store = configureStore({
    reducer: {
        productList: productListReducer
    }
})

export default store