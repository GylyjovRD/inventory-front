import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    hamburger_icon, bell_icon, setting_icon,
    logout_icon, export_icon, add_icon
} from "../../assets/iconList"

import ModalButton from "../buttons/ModalButton";

import { sellModalOpen } from "../../redux/actions/modalActions";

const HeaderMenu = () => {
    const dispatch = useDispatch()
    const {sellOpen} = useSelector((state) => state)

    const onPressHandler = (e) => {
        e.preventDefault()
        dispatch(sellModalOpen())
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
                        <ModalButton title="Satys" icon={add_icon} onPressHandler={onPressHandler} state={sellOpen}/>
                    </li>
                    {/* <li className="flex">
                        <button className="relative rounded-md focus:outline-none focus:shadow-outline-purple">
                            {bell_icon}
                            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 rounded-full border-gray-800"></span>
                        </button>
                        <ul
                            className="absolute opacity-0 right-0 w-56 p-2 mt-2 space-y-2 border rounded-md shadow-md text-gray-300 border-gray-700 bg-gray-700"
                        >
                            <li className="flex">
                                <a
                                    className="inline-flex  items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:text-gray-800 hover:bg-gray-800"
                                >
                                    <span>Harytlar</span>
                                    <span 
                                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full text-red-100 bg-red-600"
                                    >
                                        9
                                    </span>
                                </a>
                            </li>
                            <li className="flex">
                                <a
                                    className="inline-flex  items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:text-gray-800 hover:bg-gray-800"
                                >
                                    <span>Satylanlar</span>
                                    <span 
                                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full text-red-100 bg-red-600"
                                    >
                                        5
                                    </span>
                                </a>
                            </li>
                            <li className="flex">
                                <a
                                    className="inline-flex  items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:text-gray-800 hover:bg-gray-800"
                                >
                                    <span>Gecirilenler</span>
                                    <span 
                                        className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full text-red-100 bg-red-600"
                                    >
                                        1
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li>{setting_icon}</li>
                    <li>{export_icon}</li> */}
                    <li>{logout_icon}</li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderMenu;