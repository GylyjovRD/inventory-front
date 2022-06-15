import { ConstantLink } from "../../constantLink"
import { clearError, setError } from "../actions/errorActions"
import { getNotification } from "../actions/getNotification"
import { logoutUser } from "../actions/userActions"

export const asyncGetNotification = (token) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/settings/notifications/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.status === 401) {
                    dispatch(logoutUser())
                    dispatch(clearError())
                }
                return res.json()
            })
            .then(json => {
                dispatch(getNotification(json))
                dispatch(clearError())
            })
            .catch(() => dispatch(setError('internet ishlanok')))
    }
}