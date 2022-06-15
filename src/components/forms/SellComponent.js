import React, { useEffect, useState } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
// import PrimaryButton from "../buttons/PrimaryButton";
import { check_icon2, close_icon2 } from "../../assets/iconList";
import { useDispatch, useSelector } from "react-redux";
import AddToSellInvoice from "../buttons/AddToSellInvoice";
// import { ERROR_INVOICE_PRODUCT, ERROR_INVOICE_PRODUCT_FALSE, INVOICE_MODAL_CLOSE } from "../../constants/redux/modalConstants";
import { clearEditingId, setSatyshAddStatus } from "../../redux/actions/satyshActions";
// import { ConstantLink } from "../../constantLink";
import { asyncInvoiseList } from "../../redux/asyncActions/asyncInvoiceList";
import { clearError, setError } from "../../redux/actions/errorActions";
// import { editingInvoceList } from "../../redux/actions/invoiceListAction";

const SellComponent = () => {

    const dispatch = useDispatch()

    const { products, user, invoiseList, error, satysh } = useSelector(state => state);
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [selectedProd, setSelectedProd] = useState(0)
    const [selProdInfo, setSelProdInfo] = useState({})
    const [prodForSelect, setProdForSelect] = useState([])

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (products.length > 0 && satysh.editingID === null) {
            setSelectedCategory(products[0].id)
            setSelectedProd(products[0].cat_products[0].id)
            setSelProdInfo(products[0].cat_products[0])
            setProdForSelect(products[0].cat_products)
        }
    }, [])

    useEffect(() => {
        if (satysh.editingID !== null) {
            const editingData = invoiseList.filter(item => item.id === satysh.editingID)[0]
            const prodForSel = products.filter(item => item.id === Number(editingData.category))
            setProdForSelect(prodForSel[0].cat_products)
            setSelectedCategory(editingData.category)
            setSelectedProd(editingData.id)
            setSelProdInfo(editingData)
            setQuantity(editingData.quantity)

        }
    }, [satysh.editingID])


    function onCategoryChange(cat) {
        dispatch(clearError())
        setSelectedCategory(cat)
        setQuantity(1)
        const prodForSel = products.filter(item => item.id === Number(cat))
        setProdForSelect(prodForSel[0].cat_products)
        setSelProdInfo(prodForSel[0].cat_products[0])
        setSelectedProd(prodForSel[0].cat_products[0].id)
    }

    const onProductChange = (id) => {
        dispatch(clearError())
        const selectedPro = prodForSelect.filter((item) => item.id === Number(id))[0]
        setSelectedProd(selectedPro.id)
        setSelProdInfo(selectedPro)
        setQuantity(1)
    }

    const setToFixed = () => {
        if (quantity < 1) {
            setQuantity(1)
        }
        else {
            setQuantity(Math.floor(quantity))
        }
    }


    const invoiceChek = () => {
        const postData = {
            product_id: selectedProd,
            qty: quantity
        }
        let isFined = false;
        invoiseList.map(item => {
            if (Number(item.id) === Number(selectedProd)) {
                isFined = true
            }
        })
        if (isFined && satysh.editingID === null) {
            dispatch(setError('Bu haryt goshulan, bashga haryt saylan yada onki goshulany uytgedin'))
        } else {
            if (error.isError) {
                dispatch(clearError())
            }
            dispatch(asyncInvoiseList(postData, quantity, user, selProdInfo, satysh.editingID))
        }
    }

    return (
        <div className="inset-x-0 inset-y-0 bg-fixed  m-auto max-w-md h-fit rounded-md py-4 px-8 z-40 bg-gray-700 shadow-xl fixed inset-0 items-center justify-center">
            <div className="flex justify-center text-xl">
                <h2 className="text-white">Haryt Saylan</h2>
            </div>
            <div className="flex mt-4 items-center md:items-start">
                <label htmlFor="country" className="block mr-4 w-2/12 text-sm font-medium text-gray-400">
                    Kategoriya
                </label>
                <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    id="category"
                    name="category"
                    className="mt-1 block w-10/12 text-white py-2 pr-2
                                   border border-1 border-slate-400 bg-gray-700
                                   rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500
                                   focus:border-indigo-500 sm:text-sm"
                >
                    {products.length > 0 && products.map((data) => (
                        <option key={data.id} value={data.id}>{data.title}</option>
                    ))}
                </select>
            </div>
            <div className="flex mt-4 items-center">
                <label htmlFor="country" className="block mr-4 w-2/12 text-sm font-medium text-gray-400">
                    Haryt
                </label>
                <select
                    id="category"
                    name="category"
                    value={selectedProd}
                    onChange={(e) => onProductChange(e.target.value)}
                    className="mt-1 block w-10/12 text-white py-2 pr-2
                                   border border-1 border-slate-400 bg-gray-700
                                   rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500
                                   focus:border-indigo-500 sm:text-sm"
                >
                    {prodForSelect && prodForSelect.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>
            </div>
            <div className="flex">
                <div className="mt-4">
                    <label htmlFor="country" className="block w-2/12 text-sm font-medium text-gray-400">
                        Bahasy
                    </label>
                    <input
                        readOnly={true}
                        type="text"
                        name="price"
                        id="price"
                        value={`${(selProdInfo ? selProdInfo.price * 1 : 1 * 1).toFixed(2)} $`}
                        className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-10/12 shadow-sm border-x-0 rounded-sm bg-gray-800 text-white"
                    />
                </div>
                <div className="mt-4 sm:ml-1 sm:flex-col">
                    <label htmlFor="country" className="block w-2/12 text-sm font-medium text-gray-400">
                        Sany
                    </label>
                    <input
                        type="text"
                        name="qty"
                        id="qty"
                        value={quantity}
                        onBlur={setToFixed}
                        onChange={(e) => {
                            setQuantity(e.target.value)
                            // dispatch({ type: ERROR_INVOICE_PRODUCT_FALSE })
                        }}
                        className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-10/12 shadow-sm border-x-0 rounded-sm bg-gray-800 text-white"
                    />
                </div>
                <div className="mt-4 sm:ml-1 sm:flex-col">
                    <label htmlFor="country" className="block w-2/12 text-sm font-medium text-gray-400">
                        Jemi
                    </label>
                    <input
                        readOnly={true}
                        type="text"
                        name="total"
                        id="total"
                        value={`${(selProdInfo ? selProdInfo.price * quantity : 0 * 0).toFixed(2)} $`}
                        className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block
                                        w-10/12 shadow-sm border-x-0 rounded-sm bg-gray-800 text-gray-300"
                    />
                </div>
            </div>
            <p>
                {error.isError && error.errorMessage}
            </p>
            <footer className="flex justify-center space-x-6 mt-4 flex-row bg-gray-700">
                <SecondaryButton icon={close_icon2}
                    onPressHandler={() => {
                        dispatch(setSatyshAddStatus(false))
                        dispatch(clearError())
                        dispatch(clearEditingId())
                    }}

                />
                <AddToSellInvoice icon={check_icon2} onPressHandler={() => invoiceChek()} />
            </footer>
        </div>
        // </div>
    )
}

export default SellComponent;