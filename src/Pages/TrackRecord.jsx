import React from 'react'
import ForSell from '../Components/ForSell'
import SearchSection from '../Components/SearchSection'

const TrackRecord = () => {
    return (
        <div>


            <div className="container">
                <div className="heading py-10 px-5 flex flex-col md:px-[25rem]">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px] font-[900] text-[#004a8b]">Track Record</h1>
                        <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                        </div>
                        <div className="py-10">
                    <h3 className="md:text-[23px] text-[20px] leading-[30px] font-[600] text-[#004a8b]  m-1">LAWD has an outstanding track record of connecting premium buyers with specialist Australian real estate across development sites, institutional grade assets, corporate farms, downstream processing facilities, family farms and lifestyle properties.</h3>
                </div>
                </div>
                
            </div>

            <SearchSection />
            <ForSell />


        </div>
    )
}

export default TrackRecord
