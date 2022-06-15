import React from "react";

const InnerContainer = (props) => {
    return (
        <main className='h-screen overflow-y-auto md:ml-64 pt-12 bg-gray-900'>
            <div className='container grid px-6 mx-auto bg-gray-900'>
                {props.children}
            </div>
        </main>
    )
}

export default InnerContainer