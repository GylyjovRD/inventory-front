import { ADD_TO_INVOICE_LIST, CLEAR_INVOICE_LIST, DELETE_IN_INVOICE_LIST, EDITING_INVOICE_LIST } from "../types"

export const addToInvoiseList = (data) => {
    return {
        type: ADD_TO_INVOICE_LIST,
        payload: data
    }
}

export const editingInvoceList = (data) => {
    return {
        type: EDITING_INVOICE_LIST,
        payload: data
    }
}

export const deleteInInvoiceList = (data) => {
    return {
        type: DELETE_IN_INVOICE_LIST,
        payload: data
    }
}

export const clearInvoiceList = () => {
    return {
        type: CLEAR_INVOICE_LIST
    }
}