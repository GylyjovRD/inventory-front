import { useDispatch, useSelector } from "react-redux"
import { ADD_INVOICE_PRODUCT, ERROR_INVOICE_PRODUCT, INVOICE_MODAL_CLOSE } from "../../constants/redux/modalConstants"

import axios from "axios"

export const addInvoiceProducts = (data) => {
    return {
        type: ADD_INVOICE_PRODUCT,
        payload: data
    }
}

export const createInvoice = (token, postData) => {
    try{
        const config = {
            header: {
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(
            `/api/products/invoice-create/`,
            JSON.stringify(postData),
            config
        ).then((res) => console.log(res))

        // console.log("Invoice Data", data)
    }
    catch(error){
        console.log(error)
    }
}
// export const addInvoiceProducts = async (selectedProduct, quantity, token) => {
    
// const dispatch = useDispatch()

//     const postData = {
//         product_id: selectedProduct.id,
//         quantity: quantity
//     }
//     const config = {
//         headers: {
//             'Content-type':'application/json',
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(postData)
//     }
//     const {data} = await axios.post(`/api/products/invoice-quantity-check/`, config)
//     if (data===true){
//         selectedProduct.quantity = quantity;
//         dispatch({
//             type:ADD_INVOICE_PRODUCT,
//             payload: selectedProduct
//         })
       
//     }
//     else{
//         dispatch({type: ERROR_INVOICE_PRODUCT})
//     }
// }


// const postData = {
//     product_id: selectedProduct.id,
//     quantity: quantity
// }

// fetch("http://127.0.0.1:8000/api/products/invoice-quantity-check/", {
//     method: "POST",
//     headers: {
//         Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMTA0OTkxLCJpYXQiOjE2NTE1Njg5OTEsImp0aSI6ImQ2MmE3NjBiYzhkZDQ0NmM5MGM3YzY5MGM0ZWVmY2E2IiwidXNlcl9pZCI6MiwiaXNfYWRtaW4iOmZhbHNlLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSJ9.VYL130yRSfasaYDhMfxnTr4CXu5vI6DFMnecK71AwxQ`,
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify(postData)
// }).then((res)=> res.json()).then((res) => {
//     if(res === true){
//         selectedProduct.quantity = quantity;
//         let isFined = false;
//         invoice.invoiceData.map((item) => {
//             if (item.id === selectedProduct.id) {
//                 isFined = true
//             }
//         })
//         if (isFined === false){
//             dispatch(addInvoiceProducts(selectedProduct))
//         } else {
//             dispatch({type: INVOICE_MODAL_CLOSE})
//         }
//     } else {
//         alert('product yeterlik yok')
//     }
    
// }).catch((err) => console.log(err))