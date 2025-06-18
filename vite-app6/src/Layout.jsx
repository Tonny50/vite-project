import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Component/footer/Footer'
import Header from './Component/Header/Header'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout