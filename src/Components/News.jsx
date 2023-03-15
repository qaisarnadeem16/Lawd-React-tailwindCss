import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <>
            <div className="container md:py-48 py-5 md:px-16 first-letter: px-5 news bg-white">

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-[22%] w-100">
                        <div className="text-[40px] font-black text-black"><h2>News</h2></div>
                        <div className="mt-3">
                            <h3 className="md:text-[26px] text-[16px] leading-[34px] font-[600] text-[#004a8b]  m-1">Stories and sales from the field. Read about the latest news in property.</h3>
                        </div>
                        <div className="text-[#004a8b] font-bold border-b-2 pb-1 border-[#004a8b] w-32 mt-5 ">
                        <Link to='/News'><h1>View All News</h1></Link>
                        </div>
                    </div>

                    <div className="md:w-[22%] w-[100%]">
                    <div className="text-[14px] font-black  text-gray-700 md:leading-[28px]">
                            <h1 className="">Media Release</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[29px] leading-[39px]  font-black text-black pt-6 pb-1">The ag property market is finding it’s new normal</h1>
                            <h3 className="text-[14px] leading-[24px] font-[600] text-gray-500  m-1">The dominant trend of family farm businesses outbidding institutional buyers seen over the past…</h3>
                        </div>
                        <button className="text-[2rem] text-[#004a8b] mt-4"><AiOutlineArrowRight/></button>
                    </div>

                    <div className="md:w-[22%] w-[100%]">
                    <div className="text-[14px] font-black  text-gray-700 md:leading-[28px]">
                            <h1 className="">Media Release</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[29px] leading-[39px]  font-black text-black pt-6 pb-1">Historic Emu Creek on the market for first time in 155 years</h1>
                            <h3 className="text-[14px] leading-[24px] font-[600] text-gray-500  m-1">FOLLOWING 155-years in the hands of one family, Walcha’s iconic Emu Creek is now…</h3>
                        </div>
                        <button className="text-[2rem] text-[#004a8b] mt-4"><AiOutlineArrowRight/></button>
                    </div>

                    <div className="md:w-[22%] w-[100%]">
                    <div className="text-[14px] font-black  text-gray-700 md:leading-[28px]">
                            <h1 className="">Media Release</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[29px] leading-[39px] font-black text-black pt-6 pb-1">High rainfall grazing opportunity in sought-after Jugiong district comes to market after 30 years</h1>
                            <h3 className="text-[14px] leading-[24px] font-[600] text-gray-500  m-1">A proven grazing holding, with an assured renewable energy income stream, in the sought-after…</h3>
                        </div>
                        <button className="text-[2rem] text-[#004a8b] mt-4"><AiOutlineArrowRight/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
