import React from 'react'
import logo1 from '../assets/companyLogo1.png'
import logo2 from '../assets/companyLogo2.png'
import logo3 from '../assets/companyLogo3.png'
import logo4 from '../assets/companyLogo4.png'
import logo5 from '../assets/companyLogo5.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const Communities = () => {
    return (
        <>
            <div className="container Communities ">

                <div className="heading py-10 px-5 flex flex-col md:px-[25rem]">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px] font-[900] text-[#004a8b]">Our communities</h1>
                        <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                    </div>
                    <div className="pt-10">
                        <h3 className="md:text-[23px] text-[18px] leading-[30px] font-[600] text-[#004a8b]  m-1">When LAWD was formed in 2020, the founders were determined to ensure one of company’s  most central values would always be a commitment to community.</h3>
                    </div>
                    <div className="pt-10">
                        <p className="">Since that time, the team has given its support to numerous sponsorships, partnerships and speaking engagements across the country – from national events, charities and scholarship programs to smaller organisations making an important difference in their local area.
                            One of our priorities is supporting and championing those who work to nurture the careers, health and wellbeing of young Australians, including those in rural and regional communities.</p>
                    </div>
                    <div className="pt-10">
                        <p>As a company that is driven to be innovative, we also support those who promote leadership and innovation, and participate in events including the Global Food Forum, evokeAG. and Beef Australia.</p>
                    </div>


                    <div className="mt-10">
                        <h1 className="font-black">Our partners include:</h1>
                    </div>

                </div>


                <div className="CompanyLogo md:px-32 flex md:flex-row flex-col px-24 md:gap-10 gap-10 md:pb-5">
                    <div className="md:w-[20%]"><img src={logo1} alt="" /></div>
                    <div className="md:w-[20%]"><img src={logo2} alt="" /></div>
                    <div className="md:w-[20%]"><img src={logo3} alt="" /></div>
                    <div className="md:w-[20%]"><img src={logo4} alt="" /></div>
                    <div className="md:w-[20%]"><img src={logo5} alt="" /></div>
                </div>


                <div className="box md:px-32 md:pt-32 pt-20 px-5 flex  md:flex-row flex-col gap-10">
                    <div className="md:w-[30%] relative group">
                        <img src={img1} alt="" width='100%' height='auto' />
                        <span className="boxText text-white absolute bottom-0 left-0 right-0 p-5 group-hover:pb-10 transition-all duration-3000 ">
                            <span className="font-bold block">Zanda McDonald</span>
                            <span className=" block">zandamcdonaldaward.com</span>
                        </span>
                    </div>

                    <div className="md:w-[30%] relative group ">
                        <img src={img2} alt="" width='100%' height='auto' />
                        <span className="boxText text-white absolute bottom-0 left-0 right-0 p-5 group-hover:pb-10 transition-all duration-3000 ">
                            <span className="font-bold block">ActiveFarmers</span>
                            <span className=" block">activefarmers.au.com</span>
                        </span>
                    </div>

                    <div className="md:w-[30%] relative group">
                        <img src={img3} alt="" width='100%' height='auto' />
                        <span className="boxText text-white absolute bottom-0 left-0 right-0 p-5 group-hover:pb-10 transition-all duration-3000 ">
                            <span className="font-bold block">Foodbank</span>
                            <span className=" block">foodbank.au.com</span>
                        </span>
                    </div>



                </div>
                <div className="box md:px-32 md:pt-10 md:pb-32 pt-10 px-5 flex  md:flex-row flex-col gap-10 justify-center">


                    <div className="md:w-[30%] relative group">
                        <img src={img4} alt="" width='100%' height='auto' />
                        <span className="boxText text-white absolute bottom-0 left-0 right-0 p-5 group-hover:pb-10 transition-all duration-3000 ">
                            <span className="font-bold block">Country Education Foundation</span>
                            <span className=" block">cef.org.com</span>
                        </span>
                    </div>


                    <div className="md:w-[30%] relative group">
                        <img src={img5} alt="" width='100%' height='auto' />
                        <span className="boxText text-white absolute bottom-0 left-0 right-0 p-5 group-hover:pb-10 transition-all duration-3000 ">
                            <span className="font-bold block"> Humans of Agriculture</span>
                            <span className=" block">humansofagriculture.com</span>
                        </span>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Communities
