import {
    CASHBOX_GET_FAIL, 
    CASHBOX_GET_REQUEST, 
    CASHBOX_GET_SUCCESS
} from '../../constants/redux/cashboxConstants';

import axios from 'axios';

export const getCashbox = (token) => async (dispatch) => {
    try {
        dispatch({type: CASHBOX_GET_REQUEST});
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get('/api/cashbox/cashbox-get/', config);
        // console.log(data)
        dispatch({
            type: CASHBOX_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CASHBOX_GET_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}