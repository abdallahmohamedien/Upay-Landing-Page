import React , {useState} from 'react'
import logo from '../images/Vector.png'
import {FaBars , FaTimes} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
const Header = () => {
    const[nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 bg-[#C3EAD8] text-white fixed">
      <div className="flex md:px-4 ml-12">
        <img src={logo} alt="Logo" /> 
        <h1 className='text-black ml-2 font-bold text-lg'>Upay</h1>
      </div>
      <ul className='hidden md:flex items-start py-10 mr-96'>
        <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>home</li>
        <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>Services</li>
        <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>Pricing</li>
        <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>About Us</li>
        <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>contact</li>
      </ul>   
      <a href="" className='md:ml-32 text-black '>Login </a>
      <div className='bg-black hover:bg-[#0ca69b] shadow-lg md:w-32 font-medium w-24 md:mr-44 h-11 rounded-3xl text-sm py-2.5'>
        <a href="lo" className='flex justify-center rounded-lg text-sm text-white font-semibold mb-4'>Sign up <FaUserPlus className='mt-1 ml-2'/></a>
      </div>
      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-100 to-gray-800 text-gray-500'>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Services</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Pricing</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>About Us</li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>contact</li>
      </ul>)}
    </div>
  )
}

export default Header
