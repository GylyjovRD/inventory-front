import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../components/cards/TableCard";
import { info_icon, users_icon, doller_icon, add_icon } from '../../assets/iconList';
import ModalButton from "../../components/buttons/ModalButton";
import TransferForm from "../../components/forms/TransformForm";
import { setTransferOpen } from "../../redux/actions/transferActions";


const UserProducts = () => {
    const { user, stockProducts } = useSelector(state => state)
    const dispatch = useDispatch()
    const onPressHandler = () => {
        dispatch(setTransferOpen(true))
    }
    return (
        <>
            <main className='h-full overflow-y-auto md:pl-64 pt-12 bg-gray-900'>
                <div className='container grid px-6 mx-auto bg-gray-900'>
                    <h2 className='my-6 text-2xl font-semibold text-center text-white'>User: {jwtDecode(user.access).email} Hereketler</h2>


                    <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                        <div className="text-gray-200 text-lg ml-2">

                            Gelen harytlar
                        </div>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="text-sm font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-700">
                                    <th className="px-4 py-3 text-white font-semibold">Image</th>
                                    <th className="px-4 py-3 text-white font-semibold">Title</th>
                                    <th className="px-4 py-3 text-white font-semibold">Category</th>
                                    <th className="px-4 py-3 text-white font-semibold">Baha</th>
                                    <th className="px-4 py-3 text-white font-semibold">Sany</th>
                                    <th className="px-4 py-3 text-white font-semibold">Total</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>
            </main>
        </>


    )
}

export default UserProducts;