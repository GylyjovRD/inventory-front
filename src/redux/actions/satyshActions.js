import { CLEAR_EDITING_ID, SET_EDITNIG_ID, SET_SATYSH_ADD_STATUS, SET_SATYSH_STATUS } from "../types"

export const setSatyshStatus = (data) => {
    return {
        type: SET_SATYSH_STATUS,
        payload: data
    }
}

export const setSatyshAddStatus = (data) => {
    return {
        type: SET_SATYSH_ADD_STATUS,
        payload: data
    }
}

export const setEditingId = (data) => {
    return {
        type: SET_EDITNIG_ID,
        payload: data
    }
}

export const clearEditingId = () => {
    return {
        type: CLEAR_EDITING_ID
    }
}