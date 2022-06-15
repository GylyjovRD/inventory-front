import React from "react";

import TableRow from "./TableRow";

import { left_icon, right_icon } from "../../assets/iconList";
import TablePaginator from "./TablePaginator";

const TableCard = ({datas}) => {
    return (
        <>
        <div className='w-full overflow-x-auto'>
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="text-sm font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-700">
                        <th className="px-4 py-3 text-white font-semibold">Sklad</th>
                        <th className="px-4 py-3 text-white font-semibold">Jemi</th>
                        <th className="px-4 py-3 text-white font-semibold">Haryt Jemi</th>
                        <th className="px-4 py-3 text-white font-semibold">Satylan</th>
                        <th className="px-4 py-3 text-white font-semibold">Sene</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                    {datas.map((data) => (
                        <TableRow key={data.id} user={data.user} stock={data.stock} total={data.sold} productTotal={data.totalProduct} sold={data.sold} date={data.date} />
                    ))}
                    
                </tbody>
            </table>
        </div>
        {/* <TablePaginator /> */}
        </>
    )
}

export default TableCard;