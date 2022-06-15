import { GET_CATEGORY_AND_PRODUCTS } from "../types"

export const getProducts = (data) => {
    return {
        type: GET_CATEGORY_AND_PRODUCTS,
        payload: data
    }
}