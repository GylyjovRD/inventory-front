import React from "react";

import TableCard from "../cards/TableCard";

const AdminBalanceContent = () => {
    return (
        <main className='h-full overflow-y-auto md:pl-64 pt-12'>
            <div className='container h-screen grid px-6 mx-auto bg-gray-900'>
                {/* Page Title */}
                <h2 className='my-6 text-2xl font-semibold text-center text-white'>Admin Balance Page</h2>
                <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                    <TableCard />
                </div>
            </div>
        </main>
    )
}

export default AdminBalanceContent;