import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notifications from '../../components/cards/Notification';
import InfoCard from '../../components/cards/InfoCard';
import TableCard from '../../components/cards/TableCard';

// import { sellModalOpen } from '../../redux/actions/modalActions';

// import { getCashbox } from '../../redux/actions/cashboxActions';
// import { getStore } from '../../redux/actions/storeActions';

import { info_icon, users_icon, doller_icon, add_icon } from '../../assets/iconList';
import { Colors } from '../../assets/colorList';

import InnerContainer from '../../components/InnerContainer';

import ModalButton from '../../components/buttons/ModalButton';
import SellProductForm from '../../components/forms/SellProductForm';

import jwtDecode from 'jwt-decode';
import { setSatyshStatus } from '../../redux/actions/satyshActions';

const UserData = [
    {
        id: 1,
        stock: "Stock 1",
        user: "user1@gmail.com",
        sold: 655,
        totalProduct: 2360,
        cash: 700,
        date: "14.04.2022"
    },
    {
        id: 2,
        stock: "Stock 2",
        user: "user2@gmail.com",
        sold: 134,
        totalProduct: 1240,
        cash: 544,
        date: "14.04.2022"
    },
    {
        id: 3,
        stock: "Stock 3",
        user: "user3@gmail.com",
        sold: 443,
        totalProduct: 1250,
        cash: 243,
        date: "14.04.2022"
    },
    {
        id: 4,
        stock: "Stock 4",
        user: "user4@gmail.com",
        sold: 784,
        totalProduct: 2100,
        cash: 480,
        date: "14.04.2022"
    },
    {
        id: 5,
        stock: "Stock 5",
        user: "user5@gmail.com",
        sold: 123,
        totalProduct: 1994,
        cash: 899,
        date: "14.04.2022"
    },
];

const UserDashboardContent = () => {
    // const [loading, setLoading] = useState(true);
    const [cashAmount, setCashAmount] = useState(0);
    const [stockInfo, setStockInfo] = useState({})
    const [total, setTotal] = useState(0)

    // const [soldData, setSoldData] = useState({
    //     labels: UserData.map((data) => data.stock),
    //     datasets: [{
    //         label: "Satylan",
    //         data: UserData.map((data) => data.sold),
    //         backgroundColor:
    //             UserData.map((data) => Colors[data.id])
    //         ,
    //     }]
    // })

    // const [cashData, setCashData] = useState({
    //     labels: UserData.map((data) => data.stock),
    //     datasets: [{
    //         label: "Haryt Jemi",
    //         borderColor: "#ffffff",
    //         borderWidth: 0.5,
    //         data: UserData.map((data) => data.totalProduct),
    //         backgroundColor:
    //             UserData.map((data) => Colors[data.id])
    //         ,
    //     }],
    // })


    const dispatch = useDispatch()

    // useEffect(() => {
    //     setLoading(true)
    //     // dispatch(getCashbox(token))
    //     // dispatch(getStore(token))
    //     setLoading(false)
    // }, [dispatch])

    const { user, notifications, satysh, sold } = useSelector((state) => state)


    const onPressHandler = (e) => {
        e.preventDefault()
        dispatch(setSatyshStatus(true))
    }

    return (
        <>
            {satysh.satyshOpen
                ? <SellProductForm />
                : <InnerContainer>
                    <h2 className='my-6 text-2xl font-light text-center text-white'>
                        User: {' '}
                        <span className='text-gray-300 font-semibold mr-2 underline underline-offset-2'>
                            {jwtDecode(user.access).email}
                        </span> Paneli
                    </h2>

                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        {notifications.length > 0 && notifications.map((data, index) => (
                            <Notifications
                                title={data.title} key={index} date={data.created_at.substring(0, 10)} content={data.content} />
                        ))}
                    </div>
                    <div className="grid gap-3 mb-8 md:grid-cols-3">
                        <InfoCard icon={info_icon} title="Balans" content={total} />
                        <InfoCard icon={doller_icon} title="Kassa" content={cashAmount} />
                        <InfoCard icon={users_icon} title="Haryt Jemi" content={stockInfo.total_balance} />
                    </div>

                    <div className='flex items-center'>
                        <h2 className='my-6 mr-4 text-2xl flex font-light md:pl-2 text-white'>
                            Satyslar
                        </h2>
                        <ModalButton
                            icon={add_icon}
                            onPressHandler={onPressHandler}
                        />
                    </div>

                    <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                        <TableCard datas={sold.results} />
                    </div>
                </InnerContainer>
            }

        </>
    )
}

// i-mr 983989

// 151651

// 2014-12-12

// gylyjowa miwe babageldiyewna
// 74321564 

export default UserDashboardContent;