import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AdminDashboardContent from './AdminDashboardContent';
import UserDashboardContent from './UserDashboardContent';
import HeaderMenu from '../../components/menu/HeaderMenu';
import SidebarMenu from '../../components/menu/SidebarMenu';

import { listProducts, listCategories } from '../../redux/actions/productActions';
import { listNotifications } from '../../redux/actions/settingsAction';
import jwt_decode from 'jwt-decode';

const HomePage = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(null)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        setLoading(true)
        if (!userInfo) {
            history.push("/login");
        }
        if (userInfo) {
            const userObj = jwt_decode(userInfo.access);
            setUser(userObj);
            setIsAdmin(userObj.is_admin);
            dispatch(listNotifications(userInfo.access));
            dispatch(listProducts(userInfo.access));
            dispatch(listCategories(userInfo.access));
            setLoading(false);
        }
    }, [userInfo, dispatch])

    // console.log(isAdmin)

    return (
        <>
            {loading ? (
                <h2>loading</h2>
            ) : (isAdmin ? (
                <>
                    <HeaderMenu />
                    <SidebarMenu />
                    <AdminDashboardContent user={user} token={userInfo.access} />
                </>
            ) : (
                <>
                    <HeaderMenu />
                    <SidebarMenu />
                    <UserDashboardContent user={user} token={userInfo.access} />
                </>
            )
            )}
        </>
    )
}

export default HomePage;