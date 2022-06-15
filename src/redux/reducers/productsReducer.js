import { GET_CATEGORY_AND_PRODUCTS } from "../types"

const initialState = []

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_AND_PRODUCTS:
            return action.payload
        default:
            return state
    }
}