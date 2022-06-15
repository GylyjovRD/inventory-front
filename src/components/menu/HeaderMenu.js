import React from "react";
import { useDispatch } from 'react-redux';
import {
    hamburger_icon,
    //  bell_icon, setting_icon,
    logout_icon,
    //  export_icon,
    add_icon
} from "../../assets/iconList"
import { logoutUser } from "../../redux/actions/userActions";
import { setSatyshStatus } from "../../redux/actions/satyshActions";

import ModalButton from "../buttons/ModalButton";

const HeaderMenu = () => {
    const dispatch = useDispatch()
    // const { sellOpen } = useSelector((state) => state)

    const onPressHandler = (e) => {
        e.preventDefault()
        dispatch(setSatyshStatus(true))
    }
    return (
        <header className="py-4  shadow-lg bg-gray-800 h-12 w-screen fixed">
            <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-300 ">
                {/* Mobile Hamburger */}
                <button
                    className="p-1 mr-5 -ml-1 md:hidden mx-auto text-purple-300"
                >
                    {hamburger_icon}
                </button>

                <ul className="flex items-center flex-shrink-0 space-x-6">
                    <li>
                        <ModalButton
                            title="Satys"
                            icon={add_icon}
                            onPressHandler={onPressHandler}
                        // state={sellOpen}
                        />
                    </li>

                    <li onClick={() => dispatch(logoutUser())}>{logout_icon}</li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderMenu;