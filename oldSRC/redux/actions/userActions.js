import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../../constants/redux/LoginConstants';

import axios from 'axios';

export const Login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            '/api/auth/login/',
            {username: email, password: password},
            config,
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.error && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const Logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT,
    })
}