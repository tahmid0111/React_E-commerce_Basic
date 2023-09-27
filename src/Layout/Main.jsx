import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/shared/Header'
import Footer from '../Components/shared/Footer'


const Main = () => {
  return (
    <>

        <Header />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default Main
