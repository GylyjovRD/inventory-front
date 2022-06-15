import React from "react";

const ModalButton = ({title, icon, onPressHandler, state}) => {
    return(
        <div className='flex items-center self-center rounded-md bg-purple-600 px-2 cursor-pointer'
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

export default ModalButton;