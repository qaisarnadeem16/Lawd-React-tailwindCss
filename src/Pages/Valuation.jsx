import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/valuation.jpg'
import left from '../assets/left.png'

const Valuation = () => {
    return (
        <>
            <div className="container md:px-10 ">
                <div className='heroBanner '>
                    <img src={banner} alt="" />
                </div>
                <div className="text absolute md:top-[22%] top-16  md:left-[30%] z-10 md:p-0 p-5">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px] font-[900] text-white">Valuations</h1>
                        <div className="w-[63px] h-[6px] bg-[#b5d1b3] mt-2"></div>
                    </div>

                    <p className="md:text-[24px] text-[18px] font-bold md:leading-[33px] md:w-[660px] mt-7 text-white">We operate across agricultural sectors with an office network that spans the country, and pride ourselves on our reputation for excellence, trust, reliability, and results.</p>
                </div>
            </div>

            <div className="container">
                .<div class="simple px-5 md:pl-[28rem] md:pr-[20rem] md:py-16 py-6">
                    <p className="">Our team of agribusiness professionals is complemented by quality assurance processes, robust governance systems and world-class technologies. We value collaboration, with all reports peer-reviewed to ensure they are of the highest standard and deliver the optimal outcome.
                    </p>
                    <p className="md:pt-8 pt-5">We build authentic partnerships and relationships with our clients and maintain deep connections to institutional and corporate investors to ensure our valuations professionals are well-informed with real-time market intelligence.
                    </p>

                    <button className="mt-8  text-[1rem] text-[#004a8b] py-[.6rem] px-[1.8rem] border border-[#004a8b]  hover:text-black hover:bg-[#B5D1B3]">Contact Our Team</button>



                </div>

            </div>
            <div className="flex justify-between py-16 md:px-[21rem] px-5">
                <Link to='/Transaction' >
                    <div className="text-[#004a8b] font-[600] text-[14px] flex items-center gap-2 md:ml-20">
                        <img src={left} alt="" style={{ height: '11px' }} />
                        <span>Transaction</span>
                    </div>
                </Link> 
                <Link to='/Valuation' >
                    <div className="text-[#004a8b] font-[600] text-[14px] border-b-2 border-[#004a8b] pb-1 mr-32 md:block hidden">
                        <span>Valuations</span>
                    </div>
                </Link>

                <Link to='/Valuation' >
                    <div className="text-[#004a8b] font-[600] text-[14px] flex items-center gap-2 ">
                        
                    </div>
                </Link>
            </div>

        </>
    )
}

export default Valuation
