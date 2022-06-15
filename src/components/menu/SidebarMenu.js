import React, { useState } from "react";
// import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuLinks from "./MenuLink";
import { arrow_right, report_side_icon, tag_icon, left_right_icon, menu_icon, balance_icon, speaker_icon, dollar_icon, users_menu_icon, transfer_icon } from "../../assets/iconList";

import LogoImage from '../../assets/images/asiatek_logo.png'
import { useDispatch } from "react-redux";
import { setSidebarPage } from "../../redux/actions/sidebarActions";


const SidebarMenu = ({ }) => {
    const [menuOpen, setMenuOpen] = useState(true)
    const Menus = [
        { title: "Harytlar", src: tag_icon, link: "/products" },
        { title: "Hereketler", src: left_right_icon, link: "/transfer" },
        // { title: "Kassa", src: dollar_icon, link: "/cashbox" },
        // { title: "Ulanyjylar", src: users_menu_icon, link: "/users" },
    ]

    const dispatch = useDispatch()
    return (
        <div className="fixed top-0 left-0 min-h-screen bg-gray-800">
            <aside className="z-30 pt-12 flex-shrink-0 hidden w-64 overflow-y-auto bg-gray-800 md:block">
                <div className="py-4 text-gray-400">
                    <div className="flex justify-center items-center cursor-pointer">
                        <img className="w-32 h-32" src={LogoImage} alt="" />
                    </div>

                    <ul className="mt-6">
                        <li className="flex relative px-6 py-3 cursor-pointer" onClick={() => dispatch(setSidebarPage('Dashboard'))}>
                            <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                            {/* <Link to="/" className="inline-flex items-center w-full text-md font-semibold transition-colors duration-150 hover:text-gray-200 text-gray-100"> */}
                            {menu_icon}
                            <span className="ml-4">
                                Dashboard
                            </span>
                            {/* </Link> */}
                        </li>
                    </ul>
                    <ul>
                        {Menus.map((Menu, index) => (
                            <MenuLinks key={index} icon={Menu.src} title={Menu.title} link={Menu.link} />
                        ))}
                    </ul>

                    <div className="px-6 my-6">
                        <button className="flex pr-6 items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                            <span className="px-4 text-lg">
                                Bildirisler
                            </span>
                            {speaker_icon}
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default SidebarMenu;