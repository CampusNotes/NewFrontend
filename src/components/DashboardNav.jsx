import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'

function DashboardNav() {
  return (
    <>
      <div className='flex items-center justify-between w-full gap-4'>
        <div>
          <Sidebar />
        </div>
        <div className='flex items-center gap-4'>
          <NavLink>
            Home
          </NavLink>
          <NavLink>
            Home
          </NavLink>
          <NavLink>
            Home
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default DashboardNav