import React from "react";
import AdminProductDataRow from "./AdminProductDataRow";
import TablePaginator from "./TablePaginator";

const AdminProductTable = ({datas, stocks}) => {

    return (
        <>
            <div className='w-full overflow-x-auto'>
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                            <th className="px-4 py-3 text-white font-semibold">Haryt\Sklad</th>
                            <th className="px-4 py-3 text-white font-semibold">Baha</th>
                                {
                                    stocks.map((stock, index) => (
                                        <th key={index} className="px-4 py-3 text-white font-semibold">{stock.title}</th>
                                    ))
                                }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-gray-800">
                        {datas.map((data, index) => (
                            <AdminProductDataRow key={index} data={data} stocks={stocks} />
                        ))}
                    </tbody>
                </table>
            </div>
            <TablePaginator />
        </>
    )
}

export default AdminProductTable;