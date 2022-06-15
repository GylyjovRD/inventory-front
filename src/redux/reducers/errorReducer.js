import { CLEAR_ERROR, SET_ERROR } from "../types";

const initialState = {
    isError: false,
    errorMessage: ""
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                isError: true,
                errorMessage: action.payload
            };
        case CLEAR_ERROR:
            return {
                isError: false,
                errorMessage: ""
            }
        default:
            return state

    }
}