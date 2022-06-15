import React from "react";
import { useDispatch } from "react-redux";
import { INVOICE_MODAL_CLOSE } from "../../constants/redux/modalConstants";

const SecondaryButton = ({title, icon, onPressHandler, state}) => {
    const dispatch = useDispatch()

    return(
        <div className='px-5 py-3 cursor-pointer text-sm flex font-medium 
                        leading-5 text-gray-700 transition-colors 
                        duration-150 border border-gray-300 rounded-lg sm:px-4 
                        sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 
                        focus:border-gray-500 active:text-gray-500 focus:outline-none 
                        focus:shadow-outline-gray'
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

export default SecondaryButton;