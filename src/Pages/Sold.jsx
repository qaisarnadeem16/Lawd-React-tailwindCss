import React from 'react'
import SearchSection from '../Components/SearchSection'
import SoldSection from '../Components/SoldSection'

const Sold = () => {
  return (
    <div>
    

     <div className="container">
        <div className="heading py-10 px-5 flex md:ml-[25rem]">
          <div className="">
                    <h1 className="text-[40px] font-[900] text-[#004a8b]">Track Record</h1>
                    <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div></div>
        </div>
     </div>

    <SearchSection/>
    <SoldSection/>
  

    </div>
    
  )
}

export default Sold