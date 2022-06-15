import { LOGIN_USER, LOGOUT_USER } from "../types"

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const logoutUser = () => {
    localStorage.removeItem('user')
    return {
        type: LOGOUT_USER
    }
}