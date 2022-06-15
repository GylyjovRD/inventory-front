import { SET_SIDE_BAR } from "../types"

const initial = {
    selectedPage: "Dashboard"
}

export const sidebarReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_SIDE_BAR:
            return {
                selectedPage: action.payload
            }
        default:
            return state
    }
}