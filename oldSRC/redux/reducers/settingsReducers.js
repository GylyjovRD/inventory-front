import {
    NOTIFICATION_LIST_SUCCESS,
    NOTIFICATION_LIST_REQUEST,
    NOTIFICATION_LIST_ERROR,
} from '../../constants/redux/settingsConstant';

export const notificationsReducer = (state = {}, action) => {
    switch(action.type){
        case NOTIFICATION_LIST_REQUEST:
            return {loading: true}
        case NOTIFICATION_LIST_SUCCESS:
            return {loading: false, success: true, notifications: action.payload}
        case NOTIFICATION_LIST_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}