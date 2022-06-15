import { CLOSE_SOLD_ROW_VIEW, GET_SOLD_LIST, SET_SOLD_ROW_VIEW } from "../types";

const initial = {
    sold_row_view: false,
    sold_row_data: []
}

export const soldReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_SOLD_LIST:
            return { ...state, ...action.payload }
        case SET_SOLD_ROW_VIEW:
            return {
                ...state,
                sold_row_view: true,
                sold_row_data: action.payload
            }
        case CLOSE_SOLD_ROW_VIEW:
            return {
                ...state,
                sold_row_view: false,
                sold_row_data: []
            }
        default:
            return state
    }
}