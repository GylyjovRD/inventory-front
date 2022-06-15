import React from "react";

const AdminProductDataRow = ({data, stocks}) => {
    return (
        <tr className="text-gray-300">
            <td className="px-4 py-2">
                <div className="flex items-center text-sm">
                    <div className="relative hidden w-12 h-12 rounded-full md:block">
                        <img
                            className="object-cover w-full h-full rounded-xl border-purple-400 border-2"
                            src= {data.image}
                            alt=""
                            loading="lazy"
                        />
                        <div
                            className="absolute inset-0 rounded-full shadow-inner"
                        ></div>
                    </div>
                    <div className="pl-4">
                        <p className="font-semibold text-gray-50 text-md">{data.title}</p>
                        <p className="text-sm text-gray-400">Category-1</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-md">
                $ {data.price}
            </td>
            {stocks.map((stock, index) => (
                <td key={index} className="px-4 py-3 text-md">
                    14
                </td>
            ))}
        </tr>
    )
}

export default AdminProductDataRow;