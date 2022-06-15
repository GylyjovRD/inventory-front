import { SET_LOADING } from "../types"

export const setLoading = (data) => {
    return {
        type: SET_LOADING,
        payload: data,
    }
}