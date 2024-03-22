import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import Notify from '../helpers/Notify'
import { Button, Input, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PowerIcon } from '@heroicons/react/24/solid'


function DashboardNav() {

  const handleClick = () => {

  }

  return (
    <>
      <div className='flex items-center justify-between w-full gap-4 bg-white backdrop-blur-md bg-opacity-80 fixed left-0 top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4'>
        <div className='flex items-center gap-6'>
          <div className=''>
            <Sidebar />
          </div>
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-outfit font-bold text-2xl tracking-wider"
          >
            Billify
          </Typography>
        </div>

        <div className='flex items-center gap-8'>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <div className='flex items-center gap-4'>
            <Button className='flex items-center justify-center gap-2' variant='gradient' ripple={true} size='sm'>
              <PowerIcon className='h-4' />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardNav