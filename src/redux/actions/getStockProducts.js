import { GET_STOCK_PRODUCTS } from "../types"

export const getStockProducts = (data) => {
    return {
        type: GET_STOCK_PRODUCTS,
        payload: data
    }
}