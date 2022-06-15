import { CLEAR_TRANSFER_LIST_PROD, GET_STOCK_LIST, GET_TRANSFER_IN_LIST, GET_TRANSFER_OUT_LIST, SET_TRANSFER_LIST_PROD, TRANSFER_FORM_OPEN } from "../types"

const initial = {
    stockList: [],
    transferFormOpen: false,
    transferInList: [],
    transferOutList: [],
    transferListProducts: []
}

export const transferReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_STOCK_LIST:
            return {
                ...state,
                stockList: action.payload
            }
        case TRANSFER_FORM_OPEN:
            return {
                ...state,
                transferFormOpen: action.payload
            }
        case GET_TRANSFER_IN_LIST:
            return {
                ...state,
                transferInList: action.payload
            }
        case GET_TRANSFER_OUT_LIST:
            return {
                ...state,
                transferOutList: action.payload
            }
        case SET_TRANSFER_LIST_PROD:
            return {
                ...state,
                transferListProducts: action.payload
            }
        case CLEAR_TRANSFER_LIST_PROD:
            return {
                ...state,
                transferListProducts: []
            }

        default:
            return state;
    }
}