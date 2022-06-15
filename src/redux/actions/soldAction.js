import { CLOSE_SOLD_ROW_VIEW, GET_SOLD_LIST, SET_SOLD_ROW_VIEW } from "../types"

export const getSoldList = (data) => {
    return {
        type: GET_SOLD_LIST,
        payload: data
    }
}

export const setSoldRowView = (data) => {
    return {
        type: SET_SOLD_ROW_VIEW,
        payload: data
    }
}

export const closeSoldRowView = () => {
    return {
        type: CLOSE_SOLD_ROW_VIEW
    }
}