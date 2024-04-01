import React from 'react'
import { NavLink } from 'react-router-dom'

const Element = ({ title, icon, path, color }) => {
  return (
    <NavLink to={path} className={`flex items-center gap-4 ${color}`}>
            {icon}
            {title}
    </NavLink>
  )
}

export default Element