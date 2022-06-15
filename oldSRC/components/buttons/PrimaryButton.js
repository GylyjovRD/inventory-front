import React from "react";
import { useDispatch } from "react-redux";
import { INVOICE_MODAL_OPEN } from "../../constants/redux/modalConstants";

const PrimaryButton = ({title, icon, onPressHandler, state, style, data}) => {
    const dispatch = useDispatch()

    return(
        <div className={`px-5 py-3 cursor-pointer flex text-sm font-medium 
                        leading-5 text-white transition-colors duration-150 
                        bg-purple-600 border border-transparent rounded-lg 
                        sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 
                        hover:bg-purple-700 focus:outline-none 
                        focus:shadow-outline-purple`}
            onClick={onPressHandler}
        >
            <h2 className='text-lg flex text-white items-center font-semibold'>
                {title}   
            </h2>
            <div className="text-white p-1">    
                {icon}
            </div>
        </div>
    )
}

export default PrimaryButton;