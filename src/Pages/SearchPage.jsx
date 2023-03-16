import React from 'react'
import ForSell from '../Components/ForSell'
import SearchSection from '../Components/SearchSection'

const SearchPage = () => {
  return (
    <div>
    

     <div className="container">
        <div className="heading py-10 px-5 flex md:ml-[25rem]">
          <div className="">
                    <h1 className="mdtext-[40px] text-[36px] font-[900] text-[#004a8b]">For Sale</h1>
                    <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div></div>
        </div>
     </div>

    <SearchSection/>
    <ForSell/>
  

    </div>
    
  )
}

export default SearchPage
