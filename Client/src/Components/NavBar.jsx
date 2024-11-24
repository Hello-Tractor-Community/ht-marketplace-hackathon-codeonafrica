import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <nav className='bg-white text-black flex items-center justify-between py-4 px-16'>
        <img className='h-20 ' src="/logo.svg" alt="logo" />

        <div className=' w-1/3 flex items-center justify-around font-semibold'>
         <Link to ="/tractors"> Tractors </Link >
         <Link to ="/equipments"> Equipments </Link >
         <Link to ="/about"> About </Link >
         <Link to ="/contact us"> Contact Us </Link >
        
        
            

        </div>
        <div className='space-x-4 '>
          <Link to ="/signup">
            <button className=' bg-black text-white px-8 py-2 rounded-md font-semibold'> Sign up</button>
            </Link>
            <Link to="/login">
            <button className='text-black border-black bg-white border-2 px-8 py-2 rounded-md font-semibold'>Login</button>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar