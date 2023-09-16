import React from 'react'
import { Link } from 'react-router-dom'
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <HiAdjustments className='text-red-500 text-5xl' />

        </div>
      </div>


      {/* <div className="grid grid-cols-12 container mx-auto">
        <div className="logo-area col-span-2">
            <img src="logo.png" alt="" />
        </div>
        <div className="search-area col-span-8">
        <input type="text" placeholder="search your product" className="input input-bordered input-info w-full" />
        </div>
        <div className="user-area col-span-2">
            <h1>hjbed3f</h1>
        </div>
      </div> */}


      {/* <Link to='/'>Home</Link>
      <Link to='/men'>men</Link>
      <Link to='/women'>women</Link> */}
    </>
  )
}

export default Header
