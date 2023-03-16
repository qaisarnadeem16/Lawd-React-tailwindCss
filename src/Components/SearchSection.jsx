import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import map from '../assets/srhMap.PNG'


const SearchSection = () => {
    return (
        <>
            <div className="container bg-[#f6f7f7] py-10 px-5 md:px-40">
                <div className="flex gap-5 md:flex-row flex-col">
                    <div className="w-[100%] md:w-[20%]">
                        <div className="bg-white text-black h-[44px] px-2"> <select className='w-full py-3 border-b border-gray-200' >
                            <option value="current">For Sale</option>
                           <option value="">  <Link to='./Sold'> Sold</Link></option>
                        </select>
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5"> 
                        <select className='w-full py-3 border-b border-gray-200' >
                            <option value="current">State</option>
                            <option value="current">ACT</option>
                            <option value="current">NSW</option>
                            <option value="current">Nt</option>
                        </select>
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5 ">
                            <input className='border-none py-2 text-black' name="p_suburb" type="text" value="Suburb" />
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5"> <select className='w-full py-3 border-b border-gray-200' >
                            <option value="current">Property Type</option>
                            <option value="current">Cotton</option>
                            <option value="current">Crop</option>
                            <option value="current">Dairy</option>
                        </select>
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5 ">
                            <input className='border-none py-2 text-black' name="p_suburb" type="text" value="Min Price" />
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5 ">
                            <input className='border-none py-2 text-black' name="p_suburb" type="text" value="Max Price" />
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5 ">
                            <input className='border-none py-2 text-black' name="p_suburb" type="text" value="Min Area" />
                        </div>

                        <div className="bg-white text-black h-[44px] px-2 mt-5 ">
                            <input className='border-none py-2 text-black' name="p_suburb" type="text" value="Max Area" />
                        </div>

                        <div className="mt-5 bg-[#004A8B] py-2 pl-2 ">
                        <Link to='/Sold' >
                            <button className="flex gap-20 items-center text-bold text-white text-lg">
                                <h1>Search Now</h1>
                                <BiSearch />
                            </button>
                        </Link>
                    </div>
                    </div>

                    <div className="w-[100%] md:w-[80%]">
                        <img src={map} alt="" width='100%'/>
                    </div>

                   


                </div>
            </div>
        </>
    )
}

export default SearchSection
