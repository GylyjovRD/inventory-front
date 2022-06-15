import { SET_LOADING } from "../types";

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.payload
        default:
            return state
    }
}