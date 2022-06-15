import React, { useEffect, useState } from "react";

// import FormContainer from "../FormContainer";
import { useDispatch, useSelector } from 'react-redux';

import { close_icon, add_icon, check_icon2 } from "../../assets/iconList";
// import { sellModalClose } from "../../redux/actions/modalActions";
import PrimaryButton from "../buttons/PrimaryButton";
// import SecondaryButton from "../buttons/SecondaryButton";
// import ModalButton from "../buttons/ModalButton";
// import { listProducts, listCategories } from '../../redux/actions/productActions';
import SellTableCard from "../cards/SellTableCard";

import SellComponent from "./SellComponent";
// import { INVOICE_MODAL_OPEN, ERROR_INVOICE_PRODUCT_FALSE, CLEAR_INVOICE_PRODUCT, ERROR_INVOICE_PRODUCT } from "../../constants/redux/modalConstants";
// import { createInvoice } from "../../redux/actions/invoiceActions";

import { clearEditingId, setSatyshAddStatus, setSatyshStatus } from "../../redux/actions/satyshActions";
import { asyncSoldCreate } from "../../redux/asyncActions/asyncSoldCreate";
import { closeSoldRowView } from "../../redux/actions/soldAction";
import { clearInvoiceList } from "../../redux/actions/invoiceListAction";

const SellProductForm = () => {

    // ------------------------------ taza -------------------

    const { invoiseList, user, sold, products } = useSelector(state => state)

    let jemiBaha = 0;
    if (!sold.sold_row_view) {
        invoiseList.map(item => {
            jemiBaha = jemiBaha + (item.price * item.quantity)
        })
    } else {
        const newData = []
        sold.sold_row_data.map(item => {
            products.map(cat => {
                cat.cat_products.map(prod => {
                    if (prod.id === item.product_id) {
                        prod.quantity = item.quantity
                        newData.push(prod)
                    }
                })
            })
        })
        newData.map(item => {
            jemiBaha = jemiBaha + (item.price * item.quantity)
        })
    }

    // ------------------------------ sony -------------------


    // const [addProduct, setAddProduct] = useState(false)
    const dispatch = useDispatch()
    // const { sellOpen } = useSelector((state) => state)
    // const { productList } = useSelector((state) => state)
    // const { categoryList } = useSelector((state) => state)
    // const { store } = useSelector((state) => state.storeInfo)
    // const { invoice } = useSelector((state) => state)
    // const { userInfo } = useSelector((state) => state.userLogin)
    // const token = userInfo.access
    // const [invoiceTotal, setInvoiceTotal] = useState(0)

    // const [invoiceProducts, setInvoiceProducts] = useState([])

    // const onPressHandler = (e) => {
    //     e.preventDefault()
    //     // dispatch(sellModalClose())
    // }

    // const onAddProduct = (e) => {
    //     e.preventDefault()
    //     setAddProduct(!addProduct)
    // }

    // useEffect(() => {
    //     let invTotal = 0
    //     // invoice.invoiceData.map(
    //     //     (item) => invTotal = invTotal + item.quantity * item.price
    //     // )
    //     setInvoiceTotal(invTotal.toFixed(2))
    // })

    const invoiceCreateHandler = () => {
        let postData = { items: [] }
        invoiseList.map((item) => {
            postData.items.push({
                product_id: item.id,
                quantity: item.quantity
            })
        })

        if (postData.items.length === 0) {
            alert("Siz hart saylamadynyz!")
        } else {
            dispatch(asyncSoldCreate(postData, user))
        }


    }

    const { satysh } = useSelector(state => state)

    return (
        <>
            {satysh.satysh_add_modal && (

                <div className="relative bg-gray-900 w-screen h-screen z-40 bg-opacity-50">
                    <SellComponent />
                </div>
            )}
            <div className={`fixed inset-0 z-30 flex items-end bg-white bg-opacity-50 sm:items-center sm:justify-center`}>
                <div className="w-full h-full px-6 py-4 md:rounded-t-lg bg-gray-800 sm:rounded-lg overflow-scroll">
                    <header className="flex justify-end text-white cursor-pointer"
                    >
                        <div onClick={() => {
                            dispatch(setSatyshStatus(false))
                            dispatch(closeSoldRowView())
                            dispatch(clearInvoiceList())
                        }}>
                            {close_icon}
                        </div>
                    </header>
                    <div className="mt-6 mb-6">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <h3 className="ml-8 font-semibold text-lg text-gray-300">JEMI: </h3>
                                <p className="ml-4 font-semibold text-xl text-white underline underline-offset-2">{jemiBaha.toFixed(2)}</p>
                            </div>
                            <span>
                                {/* {invoice.error.isError ? invoice.error.errorMessage : ""} */}

                            </span>
                            {/* {store &&
                                <p className="mb-2 text-xl font-semibold text-gray-300">
                                    {store.title}
                                </p>
                            } */}
                            <div className="w-20 flex justify-end">
                                {!sold.sold_row_view && <PrimaryButton title="Gos" icon={add_icon} onPressHandler={() => {
                                    dispatch(setSatyshAddStatus(true))
                                    dispatch(clearEditingId())
                                }} />}
                            </div>
                        </div>
                        <form className="mt-2 sm:mt-8">
                            <SellTableCard
                                // datas={invoice.invoiceData}
                                datas={sold.sold_row_view ? sold.sold_row_data : invoiseList}

                            />
                        </form>
                    </div>
                    <footer className="flex fixed bottom-4 flex-col px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-800">
                        {/* <SecondaryButton title="Inkar et" icon={close_icon2} onPressHandler={() => dispatch(sellModalClose())} /> */}
                        {!sold.sold_row_view && <PrimaryButton title="Kabul et" icon={check_icon2} onPressHandler={() => invoiceCreateHandler()} />}
                    </footer>
                </div>
            </div>
        </>

    )
}

export default SellProductForm;