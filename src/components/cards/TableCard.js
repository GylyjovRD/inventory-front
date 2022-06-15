import React from "react";

import TableRow from "./TableRow";

import { left_icon, right_icon } from "../../assets/iconList";
import TablePaginator from "./TablePaginator";
import { useSelector } from "react-redux";

const TableCard = ({ datas, haryt }) => {

    const { sold, sidebar } = useSelector(state => state)


    return (
        <>
            <div className='w-full overflow-x-auto'>
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-sm font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-700">
                            <th className="px-4 py-3 text-white font-semibold">ID</th>
                            <th className="px-4 py-3 text-white font-semibold">{sidebar.selectedPage === "Dashboard" ? "Jemi baha" : haryt === "gelen" ? 'Kimden gelen?' : "Kime ugradylan?"}</th>
                            <th className="px-4 py-3 text-white font-semibold">Sene</th>
                            <th className="px-4 py-3 text-white font-semibold">Bellik</th>
                            {sidebar.selectedPage === "Hereketler" && <th className="px-4 py-3 text-white font-semibold">Status</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-gray-800">
                        {datas && datas.map((data) => (
                            <TableRow data={data} key={data.id} haryt={haryt} />
                        ))}

                    </tbody>
                </table>
            </div>
            {/* <TablePaginator /> */}
        </>
    )
}

export default TableCard;