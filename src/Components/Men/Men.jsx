import React from 'react'
import Navbar from '../Navbar/Navbar'

const Men = () => {
  return (
    <>
        <div className="grid grid-cols-12 container mx-auto">

        <div className="nav-area col-span-2">
            <Navbar />
        </div>

        <div className="user-area col-span-10">
            <h1>men</h1>
        </div>

        </div>
    </>
  )
}

export default Men
