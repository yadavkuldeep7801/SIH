import React from 'react'
import Header from './componetent/Header/Header'
import Footer from './componetent/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
