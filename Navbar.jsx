import React from 'react'
import logo from './logo.jpeg'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border-black border-y-[1px] space-x-8 items-center pl-4'>
      <img src={logo} alt="" className='h-[50px] '/>

      <Link to="/" className='text-blue-400 font-bold text-3xl'>Movies</Link>

      <Link to="/watchlist" className='text-blue-400 font-bold text-3xl'>WatchList</Link>

    </div>
  )
}

export default Navbar
