import React from "react";

const InfoCard = ({title, content, icon}) => {
    return (
        <div className="flex cursor-pointer border-gray-700 border-b-2 border-r-2 items-center p-4 rounded-lg shadow-xs bg-gray-800">
            <div className="mr-4 md:mr-8">
                {icon}
            </div>
            <div>
                <p className="mb-2 text-lg font-medium  text-gray-50">
                {title}
                </p>
                <p className="text-lg font-semibold text-gray-50">
                {content}
                </p>
            </div>
        </div>
    )
}

export default InfoCard;