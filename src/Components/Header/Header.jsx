import React from 'react'
import { Link } from 'react-router-dom'

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
            <h1>hjbed3f</h1>
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
