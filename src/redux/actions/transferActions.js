import { CLEAR_TRANSFER_LIST_PROD, GET_STOCK_LIST, GET_TRANSFER_IN_LIST, GET_TRANSFER_OUT_LIST, SET_TRANSFER_LIST_PROD, TRANSFER_FORM_OPEN } from "../types"

export const getStockList = (data) => {
    return {
        type: GET_STOCK_LIST,
        payload: data
    }
}

export const setTransferOpen = (data) => {
    return {
        type: TRANSFER_FORM_OPEN,
        payload: data
    }
}

export const getTransferIn = (data) => {
    return {
        type: GET_TRANSFER_IN_LIST,
        payload: data
    }
}

export const getTransferOut = (data) => {
    return {
        type: GET_TRANSFER_OUT_LIST,
        payload: data
    }
}

export const setTransferListProd = (data) => {
    return {
        type: SET_TRANSFER_LIST_PROD,
        payload: data
    }
}

export const clearTransferListProd = () => {
    return {
        type: CLEAR_TRANSFER_LIST_PROD,
    }
}