import React from "react";

import { pencil_icon, pencil_alt_icon, transfer_icon, trash_icon } from "../../assets/iconList";

const SellTableRow = ({id, image, category, title, price, qty, total}) => {
    return (
        <tr className="text-gray-300">
            <td className="px-4 py-2">
                <div className="flex items-center text-sm">
                    
                    <div className="relative hidden w-10 h-10 rounded-full md:block">
                        <img
                            className="object-cover w-full h-full rounded-full border-purple-400 border-2"
                            src= {image}
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
                    <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    >
                        {pencil_alt_icon}
                    </button>
                
                    <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    >
                        {trash_icon}
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default SellTableRow;