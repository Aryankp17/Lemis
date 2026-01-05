import React from 'react'
import Searchbar from './Searchbar'
import Tabs from './Tabs'

const Navbar = () => {
  return (
    <div className='py-3 bg-gray-800 w-full h-30 flex flex-col justify-center items-center'>    
    <Searchbar />
    <Tabs />

    </div>
  )
}

export default Navbar