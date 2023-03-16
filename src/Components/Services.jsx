import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="Services md:px-36 px-5 py-10 md:py-32">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-[32%] w-[100%]">
                        <div className="text-[14px] font-bold  text-white md:leading-[28px]">
                            <h1 className="tracking-wide">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-3"></div>
                        </div>

                        <div className="">
                            <h1 className="md:text-[40px] text-[30px] leading-[48px] font-black text-white pt-6 pb-1">Valuations</h1>
                            <h3 className="md:text-[24px] text-[18px] leading-[30px] md:leading-[34px] font-[600] text-white  m-1 md:w-[80%]">Our fully accredited
                                valuers offer informed, 
                                high quality valuation 
                                advice for corporate and
                                private agribusiness
                                 clients.</h3>
                        </div>
                        <Link to='/Valuation'>
                        <button className="mt-5  text-[1rem] text-white py-[.7rem] px-[2rem] border border-white  hover:text-[#004a8b] hover:bg-white">Find Out more</button></Link>
                    </div>

                    <div className="md:w-[32%] w-[100%]">
                    <div className="text-[14px] font-bold  text-white md:leading-[28px]">
                            <h1 className="tracking-wide">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-3"></div>
                        </div>

                        <div className="">
                            <h1 className="md:text-[40px] text-[30px] leading-[48px] font-black text-white pt-6 pb-1">Transaction</h1>
                            <h3 className="md:text-[24px] text-[18px] leading-[30px] md:leading-[34px] font-[600] text-white  m-1 md:w-[80%]">Our collaborative 
                                market leading team 
                                provides a value-add 
                                service with a proven 
                                track record of 
                                maximising proceeds..</h3>
                        </div>
                        <Link to='/Transaction'>
                        <button className="mt-5  text-[1rem] text-white py-[.7rem] px-[2rem] border border-white  hover:text-[#004a8b] hover:bg-white">Find Out more</button></Link>
                    </div>


                    <div className="md:w-[32%] w-[100%]">
                    <div className="text-[14px] font-bold  text-white md:leading-[28px]">
                            <h1 className="tracking-wide">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-3"></div>
                        </div>

                        <div className="">
                            <h1 className="md:text-[40px] text-[30px] leading-[48px] font-black text-white pt-6 pb-1">Advisery</h1>
                            <h3 className="md:text-[24px] text-[18px] leading-[30px] md:leading-[34px] font-[600] text-white  m-1 md:w-[80%]">Our experienced 
                                advisory team offers 
                                strategic consultancy 
                                advice on Land, 
                                Agriculture, Water and 
                                Development</h3>
                        </div>
                        <Link to='/Advisory'>
                        <button className="mt-5  text-[1rem] text-white py-[.7rem] px-[2rem] border border-white  hover:text-[#004a8b] hover:bg-white">Find Out more</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
