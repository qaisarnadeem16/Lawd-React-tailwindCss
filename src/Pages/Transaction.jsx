import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/transaction.jpg'
import arrow from '../assets/right.png'
import left from '../assets/left.png'

const Transaction = () => {
    return (
        <>
            <div className="container md:px-10 ">
                <div className='heroBanner '>
                    <img src={banner} alt="" />
                </div>
                <div className="text absolute md:top-[25%] top-20  md:left-[30%] z-10 md:p-0 p-5">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px] font-[900] text-white">Transactions</h1>
                        <div className="w-[63px] h-[6px] bg-[#b5d1b3] mt-2"></div>
                    </div>

                    <p className="md:text-[24px] text-[18px] font-bold md:leading-[33px] md:w-[710px] mt-7 text-white">Our experienced Transactions team specialises in the land development and agribusiness sectors stewarding the sale of some of Australia’s most significant real estate assets.</p>
                </div>
            </div>

            <div className="container">
                .<div class="simple px-5 md:pl-[28rem] md:pr-[20rem] md:py-16 py-6">
                    <p className="">
                        LAWD’s professionals have worked across agricultural sectors through many market cycles and conditions to develop an unparalleled depth of knowledge. This is complemented by a commitment to being adaptive and innovative in their selling techniques.
                    </p>
                    <p className="md:pt-8 pt-5">Our land development specialists have a proven sales record in large englobo sites, master-planned communities, and super lots within master-planned communities in all greenfield growth corridors.
                    </p>

                    <p className="md:pt-8 pt-5">At all stages of the process, our industry expertise and experience are market leading.
                    </p>

                    <p className="md:pt-8 pt-5">We pride ourselves on building connections and partnerships that go beyond the financial transaction. To do this, we cultivate domestic and international networks of valued relationships, from private landowners to corporate businesses and publicly listed organisations, to efficiently match buyers with sellers.
                    </p>

                    <p className="md:pt-8 pt-5">As a tier-one firm offering a full suite of real estate services we can connect clients with the expertise they need to accelerate their success
                    </p>

                    <button className="mt-8  text-[1rem] text-[#004a8b] py-[.6rem] px-[1.8rem] border border-[#004a8b]  hover:text-black hover:bg-[#B5D1B3]">Contact Our Team</button>



                </div>

            </div>
            <div className="flex justify-between py-16 md:px-[21rem] px-5">
                <Link to='/Advisory' >
                    <div className="text-[#004a8b] font-[600] text-[14px] flex items-center gap-2 md:ml-20">
                        <img src={left} alt="" style={{ height: '11px' }} />
                        <span>Advisory</span>
                    </div>
                </Link>
                <Link to='/Transaction' >
                    <div className="text-[#004a8b] font-[600] text-[14px] border-b-2 border-[#004a8b] pb-1  md:block hidden">
                        <span>Tansactions</span>
                    </div>
                </Link>

                <Link to='/Valuation' >
                    <div className="text-[#004a8b] font-[600] text-[14px] flex items-center gap-2 ">
                        <span>Valuation</span>
                        <img src={arrow} alt="" style={{ height: '11px' }} />
                    </div>
                </Link>
            </div>

        </>
    )
}

export default Transaction
