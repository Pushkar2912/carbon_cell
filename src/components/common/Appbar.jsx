import React from 'react'
import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { NavLink } from 'react-router-dom'
import { FaCodepen } from "react-icons/fa6";
import { PATHS } from '../../utils/paths';

const Appbar = () => {
  return (
    <div className='fixed md:hidden  p-1 flex items-center h-16 bg-gray-900 gap-2 w-full bottom-0 left-0 right-0'>
        <NavLink to={PATHS.HOME} className='h-full w-full flex items-center justify-center text-white'>
            <FiHome />
        </NavLink>
        <NavLink to={PATHS.ORGANIZATION} className='h-full w-full flex items-center justify-center text-white'>
            <CgOrganisation />
        </NavLink>
        <NavLink to={PATHS.ASSETS} className='h-full w-full flex items-center justify-center text-white'>
            <FaCodepen />
        </NavLink>
    </div>
  )
}

export default Appbar