import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="Services md:px-36 px-7 py-20 md:py-32">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-[32%] w-[100%]">
                        <div className="text-[14px] font-black  text-white md:leading-[28px]">
                            <h1 className="">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[40px] leading-[48px] font-black text-white pt-6 pb-1">Valuations</h1>
                            <h3 className="text-[24px] leading-[34px] font-[600] text-white  m-1">Our fully accredited
                                <br />  valuers offer informed, <br />
                                high quality valuation <br />
                                advice for corporate and
                                private agribusiness
                                <br /> clients.</h3>
                        </div>
                        <Link to='/Valuation'>
                        <button className="mt-5  text-[1rem] text-white py-[.7rem] px-[2rem] border border-white  hover:text-[#004a8b] hover:bg-white">Find Out more</button></Link>
                    </div>

                    <div className="md:w-[32%] w-[100%]">
                        <div className="text-[14px] font-black  text-white md:leading-[28px]">
                            <h1 className="">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[40px] leading-[48px] font-black text-white pt-6 pb-1">Transaction</h1>
                            <h3 className="text-[24px] leading-[34px] font-[600] text-white  m-1">Our collaborative <br />
                                market leading team <br />
                                provides a value-add <br />
                                service with a proven <br />
                                track record of <br />
                                maximising proceeds..</h3>
                        </div>
                        <Link to='/Transaction'>
                        <button className="mt-5  text-[1rem] text-white py-[.7rem] px-[2rem] border border-white  hover:text-[#004a8b] hover:bg-white">Find Out more</button></Link>
                    </div>


                    <div className="md:w-[32%] w-[100%]">
                        <div className="text-[14px] font-black  text-white md:leading-[28px]">
                            <h1 className="">Our Services</h1>
                            <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                        </div>

                        <div className="">
                            <h1 className="text-[40px] leading-[48px] font-black text-white pt-6 pb-1">Advisery</h1>
                            <h3 className="text-[24px] leading-[34px] font-[600] text-white  m-1">Our experienced <br />
                                advisory team offers <br />
                                strategic consultancy <br />
                                advice on Land, <br />
                                Agriculture, Water and <br />
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
