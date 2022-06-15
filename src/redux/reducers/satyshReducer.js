import { CLEAR_EDITING_ID, SET_EDITNIG_ID, SET_SATYSH_ADD_STATUS, SET_SATYSH_STATUS } from "../types"

const initialState = { satyshOpen: false, satysh_add_modal: false, editingID: null }

export const satyshReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SATYSH_STATUS:
            return {
                ...state, satyshOpen: action.payload
            }
        case SET_SATYSH_ADD_STATUS:
            return {
                ...state, satysh_add_modal: action.payload
            }
        case SET_EDITNIG_ID:
            return {
                ...state, editingID: action.payload
            }
        case CLEAR_EDITING_ID:
            return {
                ...state, editingID: null
            }
        default:
            return state
    }
}