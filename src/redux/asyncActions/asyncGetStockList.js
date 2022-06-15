import { ConstantLink } from "../../constantLink"
import { getStockList } from "../actions/transferActions"

export const asyncGetStockList = (token) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/stock/stock-list/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getStockList(json)))
            .catch(err => console.log(err))
    }
}