import { ConstantLink } from "../../constantLink"
import { getTransferIn, getTransferOut, setTransferOpen } from "../actions/transferActions"

export const asyncGetTransferInList = (token) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/transfer-fromstock-list/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getTransferIn(json)))
            .catch(err => console.log(err))
    }
}

export const asyncGetTransferOutList = (token) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/transfer-tostock-list/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(json => dispatch(getTransferOut(json)))
            .catch(err => console.log(err))
    }
}

export const asyncTransferOut = (token, postData) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/transfer-create/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(json => {
                if (json) {
                    dispatch(asyncGetTransferOutList(token))
                    dispatch(setTransferOpen(false))
                }
            })
            .catch(err => console.log(err))
    }
}

export const asyncTransferStatus = (token, postData) => {
    return function (dispatch) {
        fetch(ConstantLink + '/api/products/transfer-stock-confirmation/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(json => {
                if (json.status) {
                    dispatch(asyncGetTransferInList(token))
                }
            })
            .catch(err => console.log(err))
    }
}
