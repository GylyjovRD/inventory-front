import { GET_NOTIFICATION } from "../types"

export const getNotification = (data) => {
    return {
        type: GET_NOTIFICATION,
        payload: data
    }
}