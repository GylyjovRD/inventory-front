import { useDispatch, useSelector } from "react-redux"
import { clearTransferListProd, setTransferModalOpen, setTransferOpen } from "../../redux/actions/transferActions"
import { close_icon, add_icon, check_icon2 } from "../../assets/iconList";
import PrimaryButton from "../buttons/PrimaryButton";
import SellTableCard from "../cards/SellTableCard";
import SellComponent from "./SellComponent";
import { setSatyshAddStatus } from "../../redux/actions/satyshActions";
import { clearInvoiceList } from "../../redux/actions/invoiceListAction";
import { useState } from "react";
import { asyncTransferOut } from "../../redux/asyncActions/asyncTransferActions";


const TransferForm = () => {

    const { user, transfer, satysh, invoiseList } = useSelector(state => state)
    const [selectedStock, setSelectedStock] = useState(transfer.stockList[0].id)
    const dispatch = useDispatch()

    let jemiBaha = 0;
    invoiseList.map(item => {
        jemiBaha = jemiBaha + (item.price * item.quantity)
    })

    transfer.transferListProducts.map(transItem => {
        jemiBaha = jemiBaha + (transItem.quantity * transItem.product.price)
    })
    console.log(selectedStock)

    const transferClick = () => {
        const postData = {
            items: [],
            to_stock_id: selectedStock
        }
        invoiseList.map(item => {
            postData.items.push({
                product_id: item.id,
                quantity: item.quantity
            })
        })
        dispatch(asyncTransferOut(user.access, postData))
    }

    return (
        <>
            {satysh.satysh_add_modal && <SellComponent />}
            <div className={`fixed inset-0 z-30 flex items-end bg-white bg-opacity-50 sm:items-center sm:justify-center`}>
                <div className="w-full h-full px-6 py-4 md:rounded-t-lg bg-gray-800 sm:rounded-lg overflow-scroll">
                    <header className="flex justify-end text-white cursor-pointer"
                    >
                        <div onClick={() => {
                            dispatch(setTransferOpen(false))
                            dispatch(clearInvoiceList())
                            dispatch(clearTransferListProd())
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
                            {transfer.transferListProducts.length === 0 && <>
                                <div>
                                    <label className="flex">
                                        <h3 className="text-gray-300 mr-2 flex items-center text-lg">

                                            Ammar saylan
                                        </h3>
                                        <select className="bg-gray-900 rounded-md text-gray-300 border-none" onChange={(e) => setSelectedStock(e.target.value)}>
                                            {transfer.stockList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                                        </select>
                                    </label>
                                </div>
                                <div className="w-20 flex justify-end">
                                    <PrimaryButton title="Gos" icon={add_icon} onPressHandler={() => {
                                        dispatch(setSatyshAddStatus(true))
                                    }} />
                                </div>
                            </>}

                        </div>
                        <form className="mt-2 sm:mt-8">
                            <SellTableCard
                                // datas={invoice.invoiceData}
                                datas={transfer.transferListProducts.length === 0 ? invoiseList : transfer.transferListProducts}

                            />
                        </form>
                    </div>
                    <footer className="flex fixed bottom-4 flex-col px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-800">
                        {/* <SecondaryButton title="Inkar et" icon={close_icon2} onPressHandler={() => dispatch(sellModalClose())} /> */}
                        {transfer.transferListProducts.length === 0 && <PrimaryButton title="Ugratmak" icon={check_icon2} onPressHandler={() => transferClick()} />}
                    </footer>
                </div>
            </div>
        </>

    )
}

export default TransferForm;