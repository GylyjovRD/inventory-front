import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import Notifications from "../../components/cards/Notification";
import TableCard from "../../components/cards/TableCard";

const AdminTranfer = () => {
    const { notifications, user } = useSelector(state => state)
    return (
        <main className='h-full overflow-y-auto md:pl-64 pt-12 bg-gray-900'>
            <div className='container grid px-6 mx-auto bg-gray-900'>
                <h2 className='my-6 text-2xl font-semibold text-center text-white'>Admin: {jwtDecode(user.access).email} Dashboard</h2>

                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    {notifications && notifications.map((data, index) => (
                        <Notifications
                            title={data.title} key={index} date={data.created_at.substring(0, 10)} content={data.content} />
                    ))}
                </div>
                {/* <div className="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <InfoCard icon={info_icon} title="Jemi" content="$ 6389" />
                    <InfoCard icon={cart_icon} title="Kassa" content="$ 700" />
                    <InfoCard icon={users_icon} title="Haryt Jemi" content="$ 5689" />
                    <InfoCard icon={doller_icon} title="Ulanyjylar" content="10" />
                </div>
                <div className='grid gap-2 mb-8 md:grid-cols-2'>

                    <BarChartCard chartData={soldData} />
                    <LineChartCard chartData={cashData} />
                </div> */}
                <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                    <TableCard datas={[]} />
                </div>
            </div>
        </main>
    )
}

export default AdminTranfer;