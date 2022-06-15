import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import HeaderMenu from '../../components/menu/HeaderMenu'
import SidebarMenu from '../../components/menu/SidebarMenu'
import AdminProductContent from '../../components/content/AdminProductContent';

const ProductsPage = () => {

    const isAdmin = true
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    let history = useHistory();

  
    useEffect(() => {
      if(!userInfo){
          history.push("/login");
      }
  }, [userInfo])

    return (
        <>
        {isAdmin ? (
            <>
                <HeaderMenu />
                <SidebarMenu />
            </>
        ) : (
            <>
                <HeaderMenu />
                <SidebarMenu />
            </>

        )}
            <AdminProductContent />
        </>
    )
}

export default ProductsPage;