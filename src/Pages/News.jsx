import React from 'react'
import img1 from '../assets/f7.jpg'
import img2 from '../assets/f1.jpg'
import img3 from '../assets/f2.jpg'
import img4 from '../assets/f3.jpg'
import img5 from '../assets/f4.jpg'
import img6 from '../assets/f5.jpg'
import img7 from '../assets/f6.jpg'
import member1 from '../assets/team1.jpg'
import member2 from '../assets/team6.jpg'

const News = () => {
    return (
        <>
            <div className="container ">
                <div className="News ">
                    <div className="heading py-10 px-5 flex flex-col md:px-[22rem] ">
                        <div className="">
                            <h1 className="md:text-[40px] text-[36px]  font-[900] text-[#004a8b]">News</h1>
                            <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                        </div>
                    </div>


                    <div className='grid md:grid-cols-3 md:px-40 gap-10 px-5'>

                        <div className="COL-1">
                            <div className=" border-b-2 border-[#b5d1b3] py-4  ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">The ag property market is finding it’s new normal</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4  mt-10">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Sutton Forest sand quarry offers significant potential</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img3} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img5} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img7} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>
                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img1} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5 mt-10"><img src={member1} alt="" className='rounded-[50%] w-[40%] ' /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>
                            
                            <div className=" border-b-2 border-[#b5d1b3] py-4  ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Rapidly growing specialist real estate firm LAWD announces new Board Chair’</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                        </div>


                        <div className="COL_2">
                            <div className=" border-b-2 border-[#b5d1b3] py-2">
                                <div className="pb-5"><img src={img1} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-2">
                                <div className="pb-5"><img src={img4} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-2">
                                <div className="pb-5"><img src={img5} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img6} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>


                            <div className=" border-b-2 border-[#b5d1b3] py-4  ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">LAWD officially opens new Sydney office as it continues growth agenda</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4  mt-10">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Tamworth property offers prestigious lifestyle and production opportunities</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4  ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">The ag property market is finding it’s new normal</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4  mt-10">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Sutton Forest sand quarry offers significant potential</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img5} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Rural Property Showing Promise</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>
                        </div>


                        <div className="COL-3">

                            <div className=" border-b-2 border-[#b5d1b3] py-2">
                                <div className="pb-5"><img src={img2} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4 mt-10 ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">LAWD CEO grounded in ‘servant leadership’</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4  ">
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Rapidly growing specialist real estate firm LAWD announces new Board Chair’</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            
                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img3} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img5} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5"><img src={img7} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>

                            
                            <div className=" border-b-2 border-[#b5d1b3] py-2">
                                <div className="pb-5"><img src={img5} alt="" /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>
                            <div className=" border-b-2 border-[#b5d1b3] py-4">
                                <div className="pb-5 mt-10"><img src={member2} alt="" className='rounded-[50%] w-[40%] ' /></div>
                                <div className="text-[14px] font-[600] text-gray-600 md:leading-[28px]">
                                    <h1 className="">MEDIA RELEASE</h1>
                                    <div className="w-[55px] h-[6px] bg-[#b5d1b3] mt-1"></div>
                                </div>

                                <h4 className="text-[30px] leading-[38px] text-[#004a8b] font-black py-5 hover:text-[#b5d1b3]">Historic Emu Creek on the market for first time in 155 years</h4>
                                <span className="block text-[12px] text-gray-500 ">07 February 2023</span>
                            </div>
                        </div>
                    </div>
                  
                </div>

            </div>
        </>
    )
}

export default News
