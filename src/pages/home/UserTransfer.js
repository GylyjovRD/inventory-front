import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../components/cards/TableCard";
import { info_icon, users_icon, doller_icon, add_icon } from '../../assets/iconList';
import ModalButton from "../../components/buttons/ModalButton";
import TransferForm from "../../components/forms/TransformForm";
import { setTransferOpen } from "../../redux/actions/transferActions";


const UserTransfer = () => {
    const { user, transfer } = useSelector(state => state)
    const dispatch = useDispatch()
    const onPressHandler = () => {
        dispatch(setTransferOpen(true))
    }
    return (
        <>
            {transfer.transferFormOpen && <TransferForm />}
            <main className='h-full overflow-y-auto md:pl-64 pt-12 bg-gray-900'>
                <div className='container grid px-6 mx-auto bg-gray-900'>
                    <h2 className='my-6 text-2xl font-semibold text-center text-white'>User: {jwtDecode(user.access).email} Hereketler</h2>
                    <div className='flex items-center'>
                        <h2 className='my-6 mr-4 text-2xl flex font-light md:pl-2 text-white'>
                            Ugratmak
                        </h2>
                        <ModalButton
                            icon={add_icon}
                            onPressHandler={onPressHandler}
                        />

                    </div>

                    <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                        <div className="text-gray-200 text-lg ml-2">

                            Gelen harytlar
                        </div>
                        <TableCard datas={transfer.transferInList} haryt={'gelen'} />
                    </div>
                    <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                        <div className="text-gray-200 text-lg ml-2">
                            Ugradylan harytlar
                        </div>
                        <TableCard datas={transfer.transferOutList} haryt={'giden'} />
                    </div>
                </div>
            </main>
        </>


    )
}

export default UserTransfer;