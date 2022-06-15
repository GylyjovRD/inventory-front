import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notifications from '../../components/cards/Notification';
import InfoCard from '../../components/cards/InfoCard';
import TableCard from '../../components/cards/TableCard';
import BarChartCard from '../../components/cards/BarChartCard';
import LineChartCard from '../../components/cards/LineChartCard';

import { info_icon, cart_icon, users_icon, doller_icon } from '../../assets/iconList';
import { Colors } from '../../assets/colorList';

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

const AdminDashboardContent = () => {
    const [soldData, setSoldData] = useState({
        labels: UserData.map((data) => data.stock),
        datasets: [{
          label: "Satylan",
          data: UserData.map((data) => data.sold),
          backgroundColor: 
              UserData.map((data) => Colors[data.id])
          ,
        }]
      })

    const [cashData, setCashData] = useState({
        labels: UserData.map((data) => data.stock),
        datasets: [{
          label: "Haryt Jemi",
          borderColor: "#ffffff",
          borderWidth: 0.5,
          data: UserData.map((data) => data.totalProduct),
          backgroundColor: 
              UserData.map((data) => Colors[data.id])
          ,
        }],
      })

      const notificationList = useSelector((state) => state.notificationList)
      const {notifications} = notificationList

    return (
        <main className='h-full overflow-y-auto md:pl-64 pt-12 bg-gray-900'>
            <div className='container grid px-6 mx-auto bg-gray-900'>
                <h2 className='my-6 text-2xl font-semibold text-center text-white'>Dashboard</h2>
                
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    {notifications && notifications.map((data, index) => (
                      <Notifications 
                        title={data.title} key={index} date={data.created_at.substring(0, 10)} content={data.content} />
                    ))}
                </div>
                <div className="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <InfoCard icon={info_icon} title="Jemi" content="$ 6389" />
                    <InfoCard icon={cart_icon} title="Kassa" content="$ 700" />
                    <InfoCard icon={users_icon} title="Haryt Jemi" content="$ 5689" />
                    <InfoCard icon={doller_icon} title="Ulanyjylar" content="10" />
                </div>
                <div className='grid gap-2 mb-8 md:grid-cols-2'>
                    
                    <BarChartCard chartData={soldData} />
                    <LineChartCard chartData={cashData}/>
                </div>
                <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                    <TableCard datas={UserData} />
                </div>
            </div>
        </main>
    )
}

export default AdminDashboardContent;