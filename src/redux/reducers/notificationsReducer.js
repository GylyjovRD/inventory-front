import { GET_NOTIFICATION } from "../types"

const initialState = []

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION:
            return action.payload
        default:
            return state
    }
}