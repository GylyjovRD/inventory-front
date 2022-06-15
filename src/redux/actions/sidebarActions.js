import { SET_SIDE_BAR } from "../types"

export const setSidebarPage = (data) => {
    return {
        type: SET_SIDE_BAR,
        payload: data
    }
}