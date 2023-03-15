import React from 'react'
import icon from '../assets/s_icon.svg'

import { BsFacebook} from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container  flex  justify-center py-5">
        <div className="flex gap-7 flex-col md:flex-row items-center">
          <div className=""><img src={icon} alt="" width='60px' /></div>
          <div className="">
            <div className="text-[24px] leading-[34px] text-[#B5D1B3] font-black md:text-left text-center">
              <h3>Subscribe for updates</h3>
            </div>
            <p className='text-[14px]'>Receive news and updates straight to your inbox</p>
          </div>
          <div className="md:ml-[5rem]">
            <button className="text-[1rem] text-[#004a8b] py-[.7rem] px-[2.3rem] border border-[#004a8b] hover:bg-[#004a8b] hover:text-white">Subscribe</button>
          </div>
        </div>

      </div>
      <div className="conatiner md:flex hidden gap-10 justify-center border-t  border-[#f4f5f5] py-5 ">

        <select className=' border-none  text-[#004a8b] font-[600] text-xl w-[170px] ' >
        <option value="current">What we do</option>
        <Link to='/Sold'> <option value="current">For Sale</option></Link>
        <Link to='/trackRecord'>  <option value="current">Our Track Record</option></Link>
        <Link to='/trackRecord'>  <option value="current">Our Services</option></Link>
          <option value="current"><select><option value="current">Our Services</option></select></option>
        </select>

        <select className=' border-none text-[#004a8b] font-[600] text-xl w-[130px]  ' >
          <option value="current">About Us </option>
          <option value="current">For Sale</option>
          <option value="current">Our Track Record</option>
          <option value="current"><select><option value="current">Our Services</option></select></option>
        </select>

        <button className='text-xl font-bold text-[#004a8b] hover:text-gray-300 '>News</button>
        <button className='text-xl font-bold text-[#004a8b] hover:text-gray-300 '>Connect</button>

        <div className="flex md:py-3 gap-2 items-center">
          <button className=''><BsFacebook className='text-[#004a8b]'/></button>
          <button className='rounded-full bg-[#004a8b] text-white w-[18px] h-[18px]  '><AiOutlineInstagram className='text-white text-[15px] ml-[1px]' /></button>
          <button className='rounded-full bg-[#004a8b] text-white w-[18px] h-[18px]  '><IoLogoLinkedin className='text-white text-[15px] ml-[1px]' /></button>
         
        </div>
      </div>

      <div className="footerText container flex flex-col md:flex-row justify-center items-center gap-4 py-6 text-gray-300 border-t border-[#f4f5f5]">
        <span className="text-[14px]">Copyright © 2023 LAWD. All Rights Reserved. </span>
       <button className='hover:text-[#004a8b]'>
       <span className="text-[14px]">Privacy Policy </span>  
        </button> 
{/*         
        <div className="hover:text-[#004a8b] relative right-0">
       <span className="text-[14px]">By MadeKnow </span>  
        </div>  */}
      </div>

    </>
  )
}

export default Footer
