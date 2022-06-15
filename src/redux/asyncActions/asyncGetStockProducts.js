import { ConstantLink } from "../../constantLink"
import { getStockProducts } from "../actions/getStockProducts"

export const asyncGetStockProducts = (param, token) => {
    return function (dispatch) {
        fetch(ConstantLink + "/api/stock/stock-product-list/" + param, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getStockProducts(json)))
            .catch(err => console.log(err))
    }
}