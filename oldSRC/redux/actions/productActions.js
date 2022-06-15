import {
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_ERROR,
    CATEGORY_LIST_SUCCESS, 
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_ERROR,
} from '../../constants/redux/productConstants';

import axios from 'axios';

export const listProducts = (token, search="") => async (dispatch) => {
    const q = `?q=${search}`
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get(`/api/products/product-list/`, config)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_ERROR,
            payload: error.response && error.response.data
            ? error.response.data
            : error.message
        })
    }
}

export const listCategories = (token) => async (dispatch) => {
    try {
        dispatch({type: CATEGORY_LIST_REQUEST});
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get(`/api/products/category-list/`, config)
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: CATEGORY_LIST_ERROR,
            payload: error.response && error.response.data
            ? error.response.data
            : error.message
        })
    }
}