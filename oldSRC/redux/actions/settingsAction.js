import axios from 'axios';
import {
    NOTIFICATION_LIST_SUCCESS,
    NOTIFICATION_LIST_REQUEST,
    NOTIFICATION_LIST_ERROR,
} from '../../constants/redux/settingsConstant';

export const listNotifications = (token) => async (dispatch) => {
    try{
        dispatch({type: NOTIFICATION_LIST_REQUEST});
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get('/api/settings/notifications/', config);
        dispatch({
            type: NOTIFICATION_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: NOTIFICATION_LIST_ERROR,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}