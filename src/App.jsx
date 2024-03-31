import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import DashboardLayout from "./layouts/DashboardLayout"
import Order from "./pages/Order"
import PageNotFound from "./pages/PageNotFound"
import PrivateRoutes from "./routes/PrivateRoutes"
import Catalog from "./pages/Catalog"
import Profile from "./pages/Profile"
import Inbox from "./pages/Inbox"
import QRpage from "./pages/QRpage"
import Bills from "./pages/Bills"
import { useEffect, useState } from "react"
import PreLoader from "./components/PreLoader"


function App() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const load = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }

    load()
  }, [])

  return (
    <>
      {
        isLoading ? <PreLoader /> :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
              <Route path="/order" element={<Order />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bills" element={<Bills />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      }
    </>
  )
}

export default App
