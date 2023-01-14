import { Outlet } from '@mui/icons-material'
import React from 'react'
import Navbar from './Navbar'
const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
  </>
  )
}

export default Layout
