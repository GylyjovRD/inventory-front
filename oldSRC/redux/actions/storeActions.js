import axios from 'axios';
import {
    STORE_GET_FAIL,
    STORE_GET_SUCCESS,
    STORE_GET_REQUEST,
} from '../../constants/redux/storeConstants';

export const getStore = (token) => async (dispatch) => {
    try {
        dispatch({
            type: STORE_GET_REQUEST
        })
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get('/api/stocks/stock-get/', config)
        dispatch({
            type: STORE_GET_SUCCESS,
            payload: data
        });
    } catch (error){
        dispatch({
            type: STORE_GET_FAIL,
            payload: error.error && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}