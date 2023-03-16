import React from 'react'
import { motion } from 'framer-motion'


const HeroSection = () => {
    const transition = { type: 'spring', duration: 1 }

    return (
        <>
            <div className="container flex flex-col md:flex-row md:h-[90vh] heroSection">
                <div className="md:w-[40%] w-[100%] md:py-[12rem] py-5 px-5">
                    <motion.div
                        initial={{ left: '-200px' }}
                        whileInView={{ left: '2px' }}
                        transition={{ ...transition, type: 'tween' }}
                        className="md:text-[60px] text-[28px] font-[600] md:pl-20  text-[#004a8b] leading-[35px] md:leading-[70px] relative">
                        <h1 className=''>Genuine leaders in specialist property</h1>
                    </motion.div>

                    <div className="md:pl-20  md:text-[20px] text-[15px] mt-4 w-[80%]">
                        <p>As leaders in specialist real estate,
                            we provide industry best transactional,
                            valuation and advisory services.</p>
                    </div>

                </div>
                <div className="md:w-[60%] w-[100%] relative ">

                    <motion.div
                        initial={{ right: '20rem' }}
                        whileInView={{ right: '-9rem' }}
                        transition={{ ...transition, type: 'tween' }} className="md:block hidden absolute right-[-11rem] top-[18rem] w-[17rem] h-[17rem] rounded-full bg-[#004a8b]"></motion.div>


                    <div className="md:block hidden z-[-1] absolute right-[-25rem] top-[3rem] w-[45rem] h-[45rem] rounded-full bg-[#F1F2F2]"></div>
                    <div className="rounded-full ">
                        <div className="banner">

                            <video src={require("../assets/Home.mp4")}
                                autoPlay
                                loop
                                muted
                                className="  bannerVideo " />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection
