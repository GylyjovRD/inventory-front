import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSatyshStatus } from "../../redux/actions/satyshActions";
import { setSoldRowView } from "../../redux/actions/soldAction";
import { setTransferListProd, setTransferOpen } from "../../redux/actions/transferActions";
import PrimaryButton from "../buttons/PrimaryButton"
import { add_icon, close_icon } from "../../assets/iconList";
import { asyncTransferStatus } from "../../redux/asyncActions/asyncTransferActions";
import SecondaryButton from "../buttons/SecondaryButton";

const TableRow = ({ data, haryt }) => {

    const { sidebar, transfer, user } = useSelector(state => state)
    let jemiPul = 0


    if (sidebar.selectedPage === "Dashboard") {
        console.log('table row :', data)
        data.solditems_sold?.map((item) => {
            jemiPul = jemiPul + (item.price * item.quantity)
        })

        console.log('Dashboard')
    }

    const dispatch = useDispatch()


    const handeleRowClick = () => {
        console.log('haryt: ', haryt)
        if (sidebar.selectedPage === "Dashboard") {
            dispatch(setSoldRowView(data.solditems_sold))
            dispatch(setSatyshStatus(true))
        } else if (sidebar.selectedPage === "Hereketler") {
            console.log('asasasasa', data)
            dispatch(setTransferOpen(true))
            dispatch(setTransferListProd(data.products))
        }

    }

    return (
        <tr
            className="text-gray-50 cursor-pointer hover:bg-gray-600"
            onClick={handeleRowClick}
        >
            <td className="px-4 py-3">
                {data.id}

            </td>
            <td className="px-4 py-3 text-sm">
                {sidebar.selectedPage === "Dashboard" && `$ ${jemiPul.toFixed(2)}`}
                {(sidebar.selectedPage === "Hereketler" && haryt === "giden") && data.to_stock.title}
                {(sidebar.selectedPage === "Hereketler" && haryt === "gelen") && data.from_stock.title}

            </td>
            <td className="px-4 py-3 text-sm">
                {`${data.created_at.slice(0, 10)}  ${data.created_at.slice(11, 16)}`}
            </td>
            <td className="px-4 py-3 text-sm">
                {data.detail}
            </td>
            {sidebar.selectedPage === "Hereketler" && <td className="px-4 py-3 text-sm">
                {haryt === "gelen" ?
                    data.is_confirmed === false && data.is_rejected === false
                        ?
                        (<div className="flex justify-between">
                            <PrimaryButton title={"Kabul et"} icon={add_icon} onPressHandler={() => dispatch(asyncTransferStatus(user.access, { invoice_id: data.id, is_confirmed: true }))} />
                            <SecondaryButton title={"Inkar et"} icon={close_icon} onPressHandler={() => dispatch(asyncTransferStatus(user.access, { invoice_id: data.id, is_confirmed: false }))} />
                        </div>)
                        : data.is_confirmed ? <div className="py-2 px-2 flex justify-start rounded-md text-base">Kabul Etdiniz</div> : <div className="py-2 px-2 flex justify-start rounded-md text-base text-red-500">Inkar Etdiniz</div>
                    : data.is_confirmed === false && data.is_rejected === false
                        ? "Gorulmedik"
                        : data.is_confirmed
                            ? "Kabul Edildi"
                            : "Inkar Edildi"}
            </td>}


        </tr>
    )
}

export default TableRow;