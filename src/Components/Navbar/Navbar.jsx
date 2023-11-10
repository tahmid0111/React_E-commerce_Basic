import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col my-20">
        <Link className='mt-10' to='/'>Home</Link>
        <Link className='mt-10' to='/men'>men's clothing</Link>
        <Link className='mt-10' to='/women'>women's clothing</Link>
      </div>
    </>
  )
}

export default Navbar
