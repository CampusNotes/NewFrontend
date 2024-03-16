
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

import DashboardNav from '../components/DashboardNav'

function DashboardLayout() {
  return (
    <>
      <div>
        <div className='container mx-auto flex items-center px-8 py-4 lg:px-4'>
          <DashboardNav />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout