import React from "react";
import {Link, BrowserRouter as Router, useHistory} from 'react-router-dom'
const MenuLinks = ({ icon, title, link }) => {

    const history = useHistory()

    return (
        // <Router>
            <li className="relative px-6 py-3 cursor-pointer">
                <Link to={`${link}`} className="inline-flex items-center w-full text-lg font-semibold transition-colors duration-150 hover:text-gray-200">
                    {icon}
                    <span className="ml-4 text-white">{title}</span>
                </Link>
            </li>
        // </Router>
    )
}

export default MenuLinks