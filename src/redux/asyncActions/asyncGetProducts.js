import { ConstantLink } from "../../constantLink"
import { clearError, setError } from "../actions/errorActions"
import { getProducts } from "../actions/productsAction"
import { logoutUser } from "../actions/userActions"

export const asyncGetProducts = (token) => {
    return function (dispatch) {

        fetch(ConstantLink + '/api/products/category-products/', {
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
                dispatch(getProducts(json))
                dispatch(clearError())
            })
            .catch(() => dispatch(setError('internet ishlanok')))

    }
}