import React from 'react'

import { HiAdjustments } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex">
        <div className="logo-area basis-1/6">
            <img src="logo.png" alt="" />
        </div>
        <div className="search-area basis-4/6">
        <input type="text" placeholder="search your product" className="input input-bordered input-info w-4/5" />
        </div>
        <div className="user-area basis-1/6 text-end">
        <HiAdjustments className='text-red-500 text-5xl' />

        </div>
      </div>






    </>
  )
}

export default Header
