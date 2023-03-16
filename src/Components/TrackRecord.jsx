import React from 'react'
import { Link } from 'react-router-dom'
import map from '../assets/map.PNG'

const TrackRecord = () => {
    return (
        <>
            <div className="container bg-[#ececec] md:px-40 px-5 pt-10">

                <div className="md:text-[40px] text-[34px] font-[900]  text-[#004a8b] ">
                    <h1 className="">Track Record</h1>
                    <div className="w-[63px] h-[6px] bg-[#b5d1b3] mt-3"></div>
                </div>
                <div className="flex  flex-col md:flex-row">
                    <div className="md:w-[40%] w-[100%] pt-10">
                        <div className="">
                            <h3 className="md:text-[26px] text-[18px] leading-[30px] md:leading-[34px] font-[600] text-[#004a8b]  m-1">The LAWD team has unparalleled valuation, transaction and advisory experience, with the equivalent of centuries of involvement in property across multiple industries, and market knowledge that can only be acquired with time.</h3>
                        </div>
                        <Link to='/trackRecord'>
                        <button className="md:mt-10 mt-5 text-[.8rem] uppercase text-blue-500 py-[.6rem] px-[1.8rem] border border-[#004a8b]  hover:bg-[#004a8b] hover:text-white">Find Out more</button></Link>
                    </div>
                    <div className="md:w-[40%] w-[100%] py-10 md:py-0">
                        <img src={map} alt="" width='100%'/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrackRecord
