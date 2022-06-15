import React from "react";

import TableRow from "./TableRow";

import { left_icon, right_icon } from "../../assets/iconList";
import TablePaginator from "./TablePaginator";
import SellTableRow from "./SellTableRow";

const SellTableCard = ({datas}) => {
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
                    {datas.map((data) => (
                        <SellTableRow 
                            key={data.id}
                            id={data.id} 
                            image={`${data.image}`} 
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