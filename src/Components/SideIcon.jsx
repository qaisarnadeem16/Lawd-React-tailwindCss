import React from 'react'
import {GrFacebookOption, GrLinkedinOption, GrMail, GrTwitter} from 'react-icons/gr'

const SideIcon = () => {
  return (
    <>
    <div className="sticky md:left-0 md:top-64 bottom-0 z-10  w-full md:block hidden ">
        <div className="absolute z-10 flex flex-row md:flex-col ">
            <div className="bg-[#f1f2f2] p-2  hover:bg-[#b5d1b3] cursor-pointer text-[#004a8b]"><GrFacebookOption/></div>
            <div className="bg-[#f1f2f2] p-2 hover:bg-[#b5d1b3] cursor-pointer text-[#004a8b] mt-1"><GrTwitter/></div>
            <div className="bg-[#f1f2f2] p-2 hover:bg-[#b5d1b3] cursor-pointer text-[#004a8b] mt-1"><GrMail/></div>
            <div className="bg-[#f1f2f2] p-2 hover:bg-[#b5d1b3] cursor-pointer text-[#004a8b] mt-1"><GrLinkedinOption/></div>
            
        </div>
    </div>
    </>
  )
}

export default SideIcon
