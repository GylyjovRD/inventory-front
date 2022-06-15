import {
    STORE_GET_FAIL,
    STORE_GET_SUCCESS,
    STORE_GET_REQUEST,
} from '../../constants/redux/storeConstants';

export const getStoreReducer = (state = {}, action) => {
    switch(action.type){
        case STORE_GET_REQUEST:
            return {loading: true}
        case STORE_GET_SUCCESS:
            return {loading: false, success: true, store: action.payload}
        case STORE_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}