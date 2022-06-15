import { CLEAR_ERROR, SET_ERROR } from "../types"

export const setError = (data) => {
    return {
        type: SET_ERROR,
        payload: data
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    }
}