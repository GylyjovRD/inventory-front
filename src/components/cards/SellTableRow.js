import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { pencil_alt_icon, transfer_icon, trash_icon } from "../../assets/iconList";
import { deleteInInvoiceList } from "../../redux/actions/invoiceListAction";
import { setEditingId, setSatyshAddStatus } from "../../redux/actions/satyshActions";

const SellTableRow = ({ id, image, category, title, price, qty, total }) => {

    const { sold, transfer } = useSelector(state => state)

    const dispatch = useDispatch()
    const editInvoice = (e) => {
        e.preventDefault()
        dispatch(setSatyshAddStatus(true))
        dispatch(setEditingId(id))
    }
    return (
        <tr className="text-gray-300">
            <td className="px-4 py-2">
                <div className="flex items-center text-sm">

                    <div className="relative hidden w-10 h-10 rounded-full md:block">
                        <img
                            className="object-cover w-full h-full rounded-full border-purple-400 border-2"
                            src={image}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="pl-4">
                        <p className="font-semibold text-gray-50 text-md">{title}</p>
                        <p className="text-sm text-gray-400">{category}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-md">
                $ {price}
            </td>
            <td className="px-4 py-3 text-md">
                {qty}
                <span className="pl-4 text-gray-400">
                    sany
                </span>
            </td>
            <td className="px-4 py-3 text-md">
                $ {total}
            </td>
            <td className="px-4 py-3">
                <div
                    className="flex items-center justify-end space-x-4 text-sm"
                >
                    {(!sold.sold_row_view && transfer.transferListProducts.length === 0) && <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        onClick={(e) => editInvoice(e)}
                    >
                        {pencil_alt_icon}
                    </button>}

                    {(!sold.sold_row_view && transfer.transferListProducts.length === 0) && <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        onClick={() => dispatch(deleteInInvoiceList(id))}
                    >
                        {trash_icon}
                    </button>}
                </div>
            </td>
        </tr>
    )
}

export default SellTableRow;