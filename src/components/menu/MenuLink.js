import React from "react";
import { useDispatch } from "react-redux";
import { setSidebarPage } from "../../redux/actions/sidebarActions";


const MenuLinks = ({ icon, title, link }) => {
    const dispatch = useDispatch()
    return (
        <li className="flex relative px-6 py-3 cursor-pointer" onClick={() => dispatch(setSidebarPage(title))}>
            {/* <Link to={`${link}`} className="inline-flex items-center w-full text-lg font-semibold transition-colors duration-150 hover:text-gray-200"> */}
            {icon}
            <span className="ml-4 text-white">{title}</span>
            {/* </Link> */}
        </li>
    )
}

export default MenuLinks