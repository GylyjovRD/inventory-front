import { GET_STOCK_PRODUCTS } from "../types";

export const stockProductsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_STOCK_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}