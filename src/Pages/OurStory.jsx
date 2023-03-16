import React from 'react'
import storyBg from '../assets/storyMaskbg.jpg'
import storyCircle from '../assets/storyCircle.jpg'
import thirdpic from '../assets/storyP2.png'


const OurStory = () => {
    return (
        <>
            <div className="container md:px-8">
                <div className="bg-[#f1f2f2] ">
                    <div className="heading py-10 px-5 flex flex-col md:px-[25rem]">
                        <div className="">
                            <h1 className="md:text-[40px] text-[36px] font-[900] text-[#004a8b]">Our Story</h1>
                            <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                        </div>
                        <div className="py-10">
                            <h3 className="md:text-[23px] text-[20px] leading-[30px] font-[600] text-[#004a8b]  m-1">LAWD is a tier-one firm in the Australian property market providing a full suite of professional real estate services including advisory, transactions and valuations, with specialist expertise in the development, land and agribusiness sectors.</h3>
                        </div>
                    </div>


                    <div className="flex gap-5 flex-col md:flex-row">
                        <div className="left-img md:w-[45%] w-[90%] md:py-42 md:mx-10 mx-5">
                            <img src={storyBg} alt="" width='100%' className=' h-full block' />
                        </div>

                        <div className="right-side md:w-[50%] w-full ">
                            <p className="">
                                <div className="md:w-[40%] w-[65%] mx-5"> <img src={storyCircle} alt="" width='100%' height='auto' className=' block rounded-full' /></div>
                            </p>
                            <div className="px-5 pt-10">
                                <p className="md:pt-28  md:w-[72%] w-full">
                                    Founded in 2020, our young and dynamic company was established by some of the most respected names in the industry and is powered by a cumulative expertise and on-the-ground experience that equates to centuries of knowledge and insight.
                                </p>

                                <p className="pt-10 md:w-[72%] w-full">We have grown to a team of more than 50 specialist staff with offices across the country, rapidly building an enviable reputation in Australia’s property sector for excellence, trust, reliability and results.
                                </p>

                                <p className="pt-10 md:w-[72%] w-full">However, it’s not just optimal outcomes that we deliver for our clients. We build authentic connections and partnerships that go far beyond the financial transaction. Our network of relationships also means we can efficiently match buyers with sellers and connect our customers with expertise within our own business
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="flex gap-5 flex-col md:flex-row md:items-center md:px-32 md:py-10 ">
                        <div className="md:w-[50%] w-full pt-10 px-5">
                            <p className="md:w-[85%]  ">As a fully integrated property, advisory and valuation firm, our team of specialists collaborates on each engagement and across the country. We service everywhere from the urban fringes of our biggest metropolitan cities, through to the great expanses of Australia’s most rural and remote regions.</p>

                            <h3 className="text-[23px] md:w-[80%] py-10 leading-[30px] font-[600] text-[#004a8b]  m-1">At LAWD, our knowledge and insight accelerates your success.</h3>

                            <button className="  text-[1rem] text-white py-[.6rem] px-[1.8rem] border bg-[#004a8b]  hover:text-black hover:bg-[#B5D1B3]">View Our Team</button>

                        </div>

                        <div className="secondmask py-10 px-5 ">
                            <div className=" w-[100%] ">
                         <img src={thirdpic} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory
