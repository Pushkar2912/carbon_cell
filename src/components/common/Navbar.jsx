import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../utils/paths';

const Navbar = () => {
  return (
    <div className='md:hidden fixed p-1 flex items-center h-16 bg-gray-900 gap-2 w-full'>
        <NavLink to={PATHS.NOTIFICATION} title='Notification' className='h-full w-full flex items-center justify-center text-white'>
            <MdNotificationsNone />
        </NavLink>
        <NavLink  to={PATHS.SUPPORT} title='Support' className='h-full w-full flex items-center justify-center text-white'>
            <AiOutlineQuestionCircle />
        </NavLink>
        <NavLink  to={PATHS.SETTINGS} title='Settings' className='h-full w-full flex items-center justify-center text-white'>
            <IoSettingsOutline />
        </NavLink>
    </div>
  )
}

export default Navbar