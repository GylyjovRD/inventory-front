import { ADD_TO_INVOICE_LIST, CLEAR_INVOICE_LIST, DELETE_IN_INVOICE_LIST, EDITING_INVOICE_LIST } from "../types";

export const invoiceListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_INVOICE_LIST:
            return [...state, action.payload]
        case DELETE_IN_INVOICE_LIST:
            return state.filter(item => item.id !== action.payload)
        case EDITING_INVOICE_LIST:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
        case CLEAR_INVOICE_LIST:
            return []
        default:
            return state
    }
}