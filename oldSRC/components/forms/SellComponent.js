import React, { useState } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { check_icon2, close_icon2 } from "../../assets/iconList";
import { useDispatch, useSelector } from "react-redux";
import AddToSellInvoice from "../buttons/AddToSellInvoice";
import { ERROR_INVOICE_PRODUCT, ERROR_INVOICE_PRODUCT_FALSE, INVOICE_MODAL_CLOSE } from "../../constants/redux/modalConstants";
import { addInvoiceProducts } from "../../redux/actions/invoiceActions";

const SellComponent = ({ onAddProduct, addToInvoice, datas }) => {

    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.userLogin)
    const token = userInfo.access
    const { productList } = useSelector((state) => state)
    const { categoryList } = useSelector((state) => state)
    const { invoice } = useSelector((state) => state)
    const products = productList.product
    const categories = categoryList.categories
    const [catProducts, setCatProducts] = useState(categories[0].title)
    const [selectedProduct, setSelectedProduct] = useState(products.filter((item) => item.category === catProducts)[0])
    const [quantity, setQuantity] = useState(1)
    // console.log(selectedProduct)

    // console.log(categories)
    // console.log(products)

    function onCategoryChange(cat) {
        setQuantity(1)
        setCatProducts(cat)
        setSelectedProduct(products.filter((item) => item.category === cat)[0])
        dispatch({type: ERROR_INVOICE_PRODUCT_FALSE})
    }

    const onProductChange = (id) => {
        // console.log(typeof(id))
        setSelectedProduct(products.filter((item) => item.id === Number(id))[0])
        // console.log(selectedProduct)

        dispatch({type: ERROR_INVOICE_PRODUCT_FALSE})
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
            product_id: selectedProduct.id,
            quantity: quantity
        }

        fetch("api/products/invoice-quantity-check/", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then((res) => res.json()).then((res) => {
            if (res === true) {
                selectedProduct.quantity = quantity;
                let isFined = false;
                invoice.invoiceData.map((item) => {
                    if (item.id === selectedProduct.id) {
                        isFined = true
                    }
                })
                if (isFined === false) {
                    dispatch(addInvoiceProducts(selectedProduct))
                } else {
                    dispatch({type: ERROR_INVOICE_PRODUCT, payload: "Bu haryt gosulan, basga haryt saylan"})
                }
            } else {
                dispatch({type: ERROR_INVOICE_PRODUCT, payload: "Bu harytdan sizde yeterlik yok"})
            }

        }).catch((err) => console.log(err))
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
                    onChange={(e) => onCategoryChange(e.target.value)}
                    id="category"
                    name="category"
                    className="mt-1 block w-10/12 text-white py-2 pr-2
                                   border border-1 border-slate-400 bg-gray-700
                                   rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500
                                   focus:border-indigo-500 sm:text-sm"
                >
                    {categories.map((data, index) => (
                        <option key={index} value={data.title}>{data.title}</option>
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
                    value={selectedProduct.id}
                    onChange={(e) => onProductChange(e.target.value)}
                    className="mt-1 block w-10/12 text-white py-2 pr-2
                                   border border-1 border-slate-400 bg-gray-700
                                   rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500
                                   focus:border-indigo-500 sm:text-sm"
                >
                    {products.filter((item) => item.category === catProducts).map(
                        (prod) => <option key={prod.id} value={prod.id}>{prod.title}</option>
                    )}
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
                        value={`${(selectedProduct.price * 1).toFixed(2)} $`}
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
                            dispatch({type: ERROR_INVOICE_PRODUCT_FALSE})
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
                        value={`${(selectedProduct.price * quantity).toFixed(2)} $`}
                        className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block
                                        w-10/12 shadow-sm border-x-0 rounded-sm bg-gray-800 text-gray-300"
                    />
                </div>
            </div>
            <p>
                {invoice.error.isError ? (
                    invoice.error.errorMessage
                ) : (
                    " "
                )}
            </p>
            <footer className="flex justify-center space-x-6 mt-4 flex-row bg-gray-700">
                <SecondaryButton icon={close_icon2}
                    onPressHandler={() => dispatch({ type: INVOICE_MODAL_CLOSE })}

                />
                <AddToSellInvoice icon={check_icon2} onPressHandler={() => invoiceChek()} />
            </footer>
        </div>
        // </div>
    )
}

export default SellComponent;