import React from "react";

const Notifications = ({title, content, date}) => {
    return (
        <>
            <div className="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs">
                <h4 className="mb-4 font-semibold text-white">
                    {title}
                </h4>
                <p className="text-slate-50">
                    {content}
                </p>
                <h4 className="text-right text-sm text-slate-50">{date}</h4>
            </div>
        </>
    )
}

export default Notifications;