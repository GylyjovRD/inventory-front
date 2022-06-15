import React from 'react';

import Notifications from '../cards/Notification';
import InfoCard from '../cards/InfoCard';
import TableCard from '../cards/TableCard';

import { info_icon, cart_icon, users_icon, doller_icon } from '../../assets/iconList';

const AdminContent = () => {
    return (
        <main className='h-full overflow-y-auto md:pl-64 pt-12'>
            <div className='container grid px-6 mx-auto bg-gray-900'>
                {/* Page Title */}
                <h2 className='my-6 text-2xl font-semibold text-center text-white'>Dashboard</h2>
                
                {/* Notifications */}
                {/* <h2 className="text-white text-xl">Bildirisler</h2> */}
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    <Notifications title="Title" date="14.04.2022" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos." />
                    <Notifications title="Title" date="14.04.2022" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos." />
                </div>
                <div className="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <InfoCard icon={info_icon} title="Jemi" content="$ 6389" />
                    <InfoCard icon={cart_icon} title="Kassa" content="$ 700" />
                    <InfoCard icon={users_icon} title="Haryt Jemi" content="$ 5689" />
                    <InfoCard icon={doller_icon} title="Ulanyjylar" content="10" />
                </div>
                <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                    <TableCard />
                </div>
            </div>
        </main>
    )
}

export default AdminContent;