import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import DashboardLayout from "./layouts/DashboardLayout"
import Order from "./pages/Order"
import PageNotFound from "./pages/PageNotFound"
import PrivateRoutes from "./routes/PrivateRoutes"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
