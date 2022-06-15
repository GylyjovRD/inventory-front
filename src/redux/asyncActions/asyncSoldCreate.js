import { ConstantLink } from "../../constantLink"
import { clearInvoiceList } from "../actions/invoiceListAction"

export const asyncSoldCreate = (postData, user) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/sold-create/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.access}`
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(json => dispatch(clearInvoiceList()))
            .catch(err => console.log('yalnyshlyk: ', err))
    }
}