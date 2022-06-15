import {
    INVOICE_MODAL_OPEN,
    INVOICE_MODAL_CLOSE,
    ADD_INVOICE_PRODUCT,
    ERROR_INVOICE_PRODUCT,
    ERROR_INVOICE_PRODUCT_FALSE,
    CLEAR_INVOICE_PRODUCT
} from '../../constants/redux/modalConstants'

const initialState = {
    open: false, 
    invoiceData: [],
    error: {
        isError:false,
        errorMessage:""
    }
}

export const invoiceReducer = (state = initialState, action) => {
    switch(action.type){
        case INVOICE_MODAL_OPEN:
            return {...state,open: true}
        case INVOICE_MODAL_CLOSE:
            return {...state, open: false}
        case ADD_INVOICE_PRODUCT:
            return{
                ...state, invoiceData:[...state.invoiceData, action.payload], open:false, error: {...state.error, isError: false}
            }
        case ERROR_INVOICE_PRODUCT:
            return{
                ...state, error: {...state.error, isError: true, errorMessage: action.payload}
            }
        case ERROR_INVOICE_PRODUCT_FALSE:
            return{
                ...state, error: {...state.error, isError: false}
            }
        case CLEAR_INVOICE_PRODUCT:
            return{
                ...state, invoiceData: []
            }
        default:
            return state
    }
}