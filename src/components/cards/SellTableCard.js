import React from "react";

// import TableRow from "./TableRow";

// import { left_icon, right_icon } from "../../assets/iconList";
// import TablePaginator from "./TablePaginator";
import SellTableRow from "./SellTableRow";
import { ConstantLink } from "../../constantLink";
import { useSelector } from "react-redux";

const SellTableCard = ({ datas }) => {
    const { sold, products, transfer } = useSelector(state => state)
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
    return (
        <>
            <div className=' max-w-5xl overflow-x-auto mx-auto rounded-md'>
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-sm font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-700">
                            <th className="px-4 py-3 text-white font-semibold">Haryt</th>
                            <th className="px-4 py-3 text-white font-semibold">Baha</th>
                            <th className="px-4 py-3 text-white font-semibold">Sany</th>
                            <th className="px-4 py-3 text-white font-semibold">Jemi</th>
                            <th className="px-4 py-3 text-white font-semibold flex justify-end"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-gray-900">
                        {sold.sold_row_view === false
                            ? transfer.transferListProducts.length === 0
                                ?
                                datas.map((data) => (
                                    <SellTableRow
                                        key={data.id}
                                        id={data.id}
                                        image={`${ConstantLink}${data.image}`}
                                        category={data.category}
                                        title={data.title}
                                        price={data.price}
                                        qty={data.quantity}
                                        total={(data.quantity * data.price).toFixed(2)}
                                    />
                                )) : transfer.transferListProducts.map(pro => (
                                    <SellTableRow
                                        key={pro.product.id}
                                        id={pro.product.id}
                                        image={`${ConstantLink}${pro.product.image}`}
                                        title={pro.product.title}
                                        price={pro.product.price}
                                        qty={pro.quantity}
                                        total={(pro.quantity * pro.product.price).toFixed(2)}
                                    />

                                )) : newData.map((data) => (
                                    <SellTableRow
                                        key={data.id}
                                        id={data.id}
                                        image={`${ConstantLink}${data.image}`}
                                        category={data.category}
                                        title={data.title}
                                        price={data.price}
                                        qty={data.quantity}
                                        total={(data.quantity * data.price).toFixed(2)}
                                    />
                                ))}
                    </tbody>
                </table>
            </div>
            {/* <TablePaginator /> */}
        </>
    )
}

export default SellTableCard;