import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import AllProducts from '../Components/allproducts/AllProducts'


const Home = () => {
  return (
    <>

        <div className="grid grid-cols-12 container mx-auto">

            <div className="nav-area col-span-2">
                <Navbar />
            </div>

            <div className="user-area col-span-10">
                <AllProducts />
            </div>

        </div>
        


    </>
  )
}

export default Home
