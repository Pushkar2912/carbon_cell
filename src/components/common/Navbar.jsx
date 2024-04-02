import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../utils/paths';
import { FaFireFlameCurved } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='md:hidden fixed p-2 flex items-center h-16 bg-gray-900 w-full'>
      <div>
        <div className='flex items-center text-green-400 '>
          <FaFireFlameCurved size={40} />
          <div>
            <p className='text-xl font-semibold'>Carbon Cell</p>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-end gap-6'>
        <NavLink to={PATHS.NOTIFICATION} title='Notification' className='text-gray-100 h-full'>
          <MdNotificationsNone size={20} />
        </NavLink>
        <NavLink to={PATHS.SUPPORT} title='Support' className='text-white h-full'>
          <AiOutlineQuestionCircle size={20} />
        </NavLink>
        <NavLink to={PATHS.SETTINGS} title='Settings' className='text-white h-full'>
          <IoSettingsOutline size={20} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar