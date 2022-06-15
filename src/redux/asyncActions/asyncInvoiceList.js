import { ConstantLink } from "../../constantLink";
import { setError } from "../actions/errorActions";
import { addToInvoiseList, editingInvoceList } from "../actions/invoiceListAction";
import { setSatyshAddStatus } from "../actions/satyshActions";

export const asyncInvoiseList = (postData, qty, user, selProdInfo, editing) => {
    return function (dispatch) {
        fetch(ConstantLink + "/api/products/product-qty-check/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.access}`
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(json => {
                if (json) {
                    const invoice = selProdInfo;
                    invoice.quantity = qty;
                    if (editing === null) {
                        dispatch(addToInvoiseList(invoice))
                    } else {
                        dispatch(editingInvoceList(invoice))
                    }

                    dispatch(setSatyshAddStatus(false))
                } else {
                    dispatch(setError('Bu hatyrtdan yeterlik yok'))
                }
            })
            .catch(err => console.log(err))
    }
}