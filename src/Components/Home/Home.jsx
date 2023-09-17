import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Men from '../Men/Men'

const Home = () => {
  return (
    <>

        <div className="grid grid-cols-12 container mx-auto">

            <div className="nav-area col-span-2">
                <Navbar />
            </div>

            <div className="user-area col-span-10">
                
            </div>

        </div>
        


    </>
  )
}

export default Home
