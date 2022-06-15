import { ConstantLink } from "../../constantLink"
import { getSoldList } from "../actions/soldAction"

export const asyncGetSoldList = (token) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/invoice-list/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => dispatch(getSoldList(res)))
            .catch(err => console.log(err))

    }
}