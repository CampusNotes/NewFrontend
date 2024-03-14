
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Sidebar from '../components/Sidebar'
import DashboardNav from '../components/DashboardNav'

function DashboardLayout() {
  return (
    <>
      <div>
        <div className='container mx-auto flex items-center pt-4'>
          <Sidebar />
          <DashboardNav />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout