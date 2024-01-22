import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div className='flex justify-between items-center px-16 py-4 max-md:justify-center'>
        <Link to="/">
            <h1 className='text-2xl font-bold'>Internship<span className='text-primary'>Form</span></h1>
        </Link>
        <ul className='flex space-x-4 max-md:hidden'>
            <li className='hover:underline underline-offset-4'><Link to="/">Home</Link></li>
        </ul>
    </div>
  )
}

export default NavbarComponent