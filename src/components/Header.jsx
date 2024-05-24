import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    return (
        <div className={`flex justify-between items-center p-4 bg-${location.pathname == "/user" ? "gray-900" : "transparent"}`}>
            <div className="left"></div>
            <div className={`right flex gap-3 text-${location.pathname == "/user" ? "white" : "#000"} cursor-pointer text-sm`}>
                <Link to={"/"}><div className='border p-1 rounded-sm'>Counter</div></Link>
                <Link to={"/user"}><div className='border p-1 rounded-sm'>User Info</div></Link>
                <Link to={"/editor"}><div className='border p-1 rounded-sm'>Editor</div></Link>
            </div>
        </div>
    )
}

export default Header