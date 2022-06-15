import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import InnerContainer from '../../components/InnerContainer';
import HeaderMenu from '../../components/menu/HeaderMenu';
import SidebarMenu from '../../components/menu/SidebarMenu';



const TransferPage = () => {
    const [stockInfo, setStockInfo] = useState({})
    const { store } = useSelector((state) => state.storeInfo)

    useEffect(() => {
        if (store) {
            setStockInfo(store)
        }
    }, [store])

    return (
        <>
            <HeaderMenu />
            <SidebarMenu />
            <InnerContainer>
            <h2 className='my-6 text-2xl font-light text-center text-white'>
                            <span className='text-gray-300 font-semibold mr-2 underline underline-offset-2'>
                                {stockInfo.title}
                            </span> Paneli
                        </h2>
            </InnerContainer>
        </>
    )
}

export default TransferPage;