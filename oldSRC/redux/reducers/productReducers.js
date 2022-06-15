import {
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_ERROR,
    CATEGORY_LIST_SUCCESS, 
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_ERROR,
} from '../../constants/redux/productConstants';

export const productsListReducer = (state = {products: []}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_LIST_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const categoryListReducer = (state = {categories: []}, action) => {
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return {loading: true, categories: []}
        case CATEGORY_LIST_SUCCESS:
            return {loading: false, categories: action.payload}
        case CATEGORY_LIST_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}