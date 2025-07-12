"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white flex items-center fixed w-full p-4  justify-between ">
        <div><Link href="/"><button className='font-extrabold text-2xl cursor-pointer'>TiaType</button></Link></div>
        <div>
        <ul className='flex gap-8 items-center'>
                <li><Link href="/login"><button className=' cursor-pointer bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded'>Login</button></Link></li>
                <li><Link href="/signup"><button  className="cursor-pointer bg-green-900 hover:bg-green-700 px-4 py-2 rounded font-semibold">Signup</button></Link></li>
                <li><Link href="/dashboard"><button className='cursor-pointer font-semibold hover:bg-teal-600 bg-teal-700 py-2 px-4 rounded'>Dashboard</button></Link></li>
                <li><Link href="/create-post"><button className='cursor-pointer font-semibold hover:bg-teal-600 bg-teal-700 py-2 px-4 rounded'>Create</button></Link></li>
                <li><Link href="/about"><button className='cursor-pointer font-semibold hover:bg-teal-600 bg-teal-700 py-2 px-4 rounded'>About Us</button></Link></li>
                <li><Link href="/contact"><button className='cursor-pointer font-semibold hover:bg-teal-600 bg-teal-700 py-2 px-4 rounded'>Contact Us</button></Link></li>
                <li><Link href="/"><button
          onClick={() => {
            localStorage.removeItem('userId');
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer font-semibold"
        >
          Logout
        </button></Link></li>
                </ul>
                </div>

    </nav>
  )
}

export default Navbar