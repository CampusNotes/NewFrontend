import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import DashboardLayout from "./layouts/DashboardLayout"

import PageNotFound from "./pages/PageNotFound"
import PrivateRoutes from "./routes/PrivateRoutes"

import Profile from "./pages/Profile"

import { useEffect, useState } from "react"
import PreLoader from "./components/PreLoader"
import Notes from "./pages/Notes"
import ViewNotes from "./pages/ViewNotes"


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
              <Route path="/notes" element={<Notes />} />
              <Route path="/viewnotes" element={<ViewNotes />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      }
    </>
  )
}

export default App
