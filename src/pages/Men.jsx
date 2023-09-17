import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MenProducts from '../Components/Men/MenProducts'

const Men = () => {
  return (
    <>
        <div className="grid grid-cols-12 container mx-auto">

        <div className="nav-area col-span-2">
            <Navbar />
        </div>

        <div className="user-area col-span-10">
            <MenProducts />
        </div>

        </div>
    </>
  )
}

export default Men
