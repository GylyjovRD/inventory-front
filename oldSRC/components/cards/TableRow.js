import React from "react";

const TableRow = ({stock, total, productTotal, sold, date, user}) => {
    return (
        <tr className="text-gray-50 cursor-pointer hover:bg-gray-600">
            <td className="px-4 py-3">
                <div className="flex flex-col justify-start items-start text-sm">
                    <p className="font-semibold text-md text-white uppercase">{stock}</p>
                    <p className="text-md text-white underline decoration-purple-600 underline-offset-2 decoration-2">
                        {user}
                    </p>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">
                $ {total}
            </td>
            <td className="px-4 py-3 text-sm">
                $ {productTotal}
            </td>
            <td className="px-4 py-3 text-sm">
                $ {sold}
            </td>
            <td className="px-4 py-3 text-sm">
                {date}
            </td>
        </tr>
    )
}

export default TableRow;