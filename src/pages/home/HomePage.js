import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminDashboardContent from './AdminDashboardContent';
import UserDashboardContent from './UserDashboardContent';
import HeaderMenu from '../../components/menu/HeaderMenu';
import SidebarMenu from '../../components/menu/SidebarMenu';
import AdminTranfer from './AdminTranfer';
import UserTransfer from './UserTransfer';

import jwt_decode from 'jwt-decode';
import { asyncGetProducts } from '../../redux/asyncActions/asyncGetProducts';
import { asyncGetNotification } from '../../redux/asyncActions/asyncGetNotif';
import { asyncGetSoldList } from '../../redux/asyncActions/asyncGetSoldList';
import { asyncGetStockList } from '../../redux/asyncActions/asyncGetStockList';
import { asyncGetTransferInList, asyncGetTransferOutList } from '../../redux/asyncActions/asyncTransferActions';
import { asyncGetStockProducts } from '../../redux/asyncActions/asyncGetStockProducts';
import UserProducts from './UserProducts';

const HomePage = () => {

    const { user, sidebar } = useSelector(state => state);

    const [adminPage, setAdminPage] = useState(<></>)
    const [userPage, setUserPage] = useState(<></>)

    const { is_admin } = jwt_decode(user.access)

    const page = sidebar.selectedPage

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetProducts(user.access))
        dispatch(asyncGetNotification(user.access))
        dispatch(asyncGetSoldList(user.access))
        dispatch(asyncGetStockList(user.access))
        dispatch(asyncGetTransferInList(user.access))
        dispatch(asyncGetTransferOutList(user.access))
        dispatch(asyncGetStockProducts("", user.access))
    }, [])

    useEffect(() => {
        if (sidebar.selectedPage === "Dashboard") {
            setAdminPage(<AdminDashboardContent />)
            setUserPage(<UserDashboardContent />)
        } else if (sidebar.selectedPage === "Hereketler") {
            setAdminPage(<AdminTranfer />)
            setUserPage(<UserTransfer />)
        } else if (sidebar.selectedPage === "Harytlar") {
            setAdminPage()
            setUserPage(<UserProducts />)
        }

    }, [sidebar])


    return (
        <>
            <HeaderMenu />
            <SidebarMenu />
            {is_admin
                ? adminPage
                : userPage
            }
        </>
    )
}

export default HomePage;