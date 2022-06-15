import {
    CASHBOX_GET_FAIL, 
    CASHBOX_GET_REQUEST, 
    CASHBOX_GET_SUCCESS
} from '../../constants/redux/cashboxConstants';

export const cashboxGetReducer = (state = {}, action) => {
    switch (action.type){
        case CASHBOX_GET_REQUEST:
            return {loading: true}
        case CASHBOX_GET_SUCCESS:
            return {loading: false, cashbox: action.payload}
        case CASHBOX_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}