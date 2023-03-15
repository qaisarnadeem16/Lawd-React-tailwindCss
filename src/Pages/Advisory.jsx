/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/advisery.jpg'
import arrow from '../assets/right.png'
const Advisory = () => {
    return (
        <>
            <div className="container md:px-10 ">
                <div className='heroBanner '>
                    <img src={banner} alt="" />
                </div>
                <div className="text absolute md:top-[25%] top-20  md:left-[30%] z-10 md:p-0 p-5">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px] font-[900] text-white">Advisory</h1>
                        <div className="w-[63px] h-[6px] bg-[#b5d1b3] mt-2"></div>
                    </div>

                    <p className="md:text-[24px] text-[18px] font-bold md:leading-[33px] md:w-[700px] mt-10 text-white"> Our experienced advisory professionals are some of Australia’s most skilled property and agribusiness professionals.</p>
                </div>
            </div>

            <div className="container">
                .<div class="simple px-5 md:px-[28rem] md:py-16 py-6">
                    <p className="">
                        We develop and help execute strategies throughout a property’s life cycle that support clients to achieve their objectives, whether it be for single assets or across complex portfolios.
                    </p>
                    <p className="md:pt-10 pt-5">
                        As a tier-one firm we offer a full suite of services including: mortgage security; financial reporting; taxation valuations; pre-sale due diligence; leasing consultancy; insurance assessments; mergers and acquisitions; rental determinations; property rights advice; objections to statutory assessment; administration and insolvency; highest and best use analysis; expert witness and litigation; and, compulsory acquisition. We value collaboration within our team on every engagement and build relationships with our clients through ongoing dialogue, so we can deliver the very best results.
                    </p>

                    <button className="mt-8  text-[1rem] text-[#004a8b] py-[.6rem] px-[1.8rem] border border-[#004a8b]  hover:text-black hover:bg-[#B5D1B3]">Contact Our Team</button>


                   
                </div>

            </div>
            <div className="flex justify-between py-16 md:px-[21rem] px-5">
                        <div className="">

                        </div>
                        <Link to='/Advisory' >
                        <div className="text-[#004a8b] font-[600] text-[13px] border-b-2 border-[#004a8b] pb-1 ml-40 md:block hidden">
                            <span>Advisory</span>
                        </div>
                        </Link>
                        <Link to='/Transaction' >
                        <div className="text-[#004a8b] font-[600] text-[13px] flex items-center gap-2 ">
                            <span>Transaction</span>
                             <img src={arrow} alt="" style={{height:'11px'}} />
                        </div>
                        </Link>
                    </div>


        </>
    )
}

export default Advisory
