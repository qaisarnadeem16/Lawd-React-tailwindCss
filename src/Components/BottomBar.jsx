import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'


const BottomBar = () => {
    const [showSearchList, setShowSearchList] = useState(false);

    function toggleList() {
        setShowSearchList(!showSearchList);
    }
    return (
        <>
            <div className="container sticky bottom-0 bg-[#004a8b] w-full py-3 md:hidden block z-50">
                <div className="flex justify-center "> {showSearchList ? <button className="flex  text-white text-[20px] font-bold " onClick={toggleList}>SEARCH LISTINGS <RiArrowDropUpLine className='text-[1.7rem]' /></button> :
                    <button className="flex  text-white text-[20px] font-black" onClick={toggleList}>SEARCH LISTINGS <RiArrowDropDownLine className='text-[1.7rem]' /></button>}</div>
                
                <div className={`${showSearchList ? "visible" : "hidden"} w-[100%] absolute bottom-14  bg-white  px-7  z-10`}>

                    <div className="mt-7 w-full">
                        <select className='w-full py-1 border-b border-gray-200' >
                            <option value="current">For Sale</option>
                            <option value="current">Sold</option>
                        </select>
                    </div>

                    <div className="mt-5 w-full">
                        <select className='w-full py-1 border-b border-gray-200' p >
                            <option value="current">Sate</option>
                        </select>
                    </div>
                    <div className="mt-5 w-full  border-b border-gray-200 pb-1">
                        <h5>Subrub</h5>
                    </div>

                    <div className="mt-4 w-full">
                        <select className='w-full py-2 border-b pb-1 border-gray-200' >
                            <option value="current">Property Type</option>
                        </select>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-1">
                        <h5>Min Price</h5>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-1">
                        <h5>Max Price</h5>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-1">
                        <h5>Min Area</h5>
                    </div>
                    <div className="mt-5 w-full border-b border-gray-200 pb-1">
                        <h5>Max Area</h5>
                    </div>
                    <div className="mt-5 mb-5 bg-[#004A8B] py-2 pl-5 ">
                       <button className="flex gap-5 items-center text-extrabold text-white text-xl">
                        <h1>Search Now</h1>
                        <BiSearch/>
                       </button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default BottomBar
