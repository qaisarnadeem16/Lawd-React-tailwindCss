
import React from 'react'
import member1 from '../assets/team1.jpg'
import member2 from '../assets/team2.jpg'
import member3 from '../assets/team3.jpg'
import member4 from '../assets/team4.jpg'
import member5 from '../assets/team5.jpg'
import member6 from '../assets/team6.jpg'
import member7 from '../assets/team7.jpg'

const Team = () => {
    return (
        <>
            <div className="container md:px-8  relative ">
                <div className="team ">
                    <div className="heading py-10 px-5 flex flex-col md:px-[22rem]">
                        <div className="">
                            <h1 className="md:text-[40px] text-[36px]  font-[900] text-[#004a8b]">Who we are</h1>
                            <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                        </div>
                        <div className="py-10">
                            <p className="">We are real estate land specialists. Our experts provide market leading transactional services and advice</p>
                        </div>
                    </div>

                    <div className="container team md:px-20 px-5 md:pb-16 ">    
                        <h4 className="text-[28px] leading-[37px] font-[600] text-[#004a8b]">Executive</h4>


                        <div className=" pt-5 md:px-0  flex flex-wrap flex-row  gap-3 md:gap-5">

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member1} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Robin Blain</span>
                                    <span className=" block">Chairmen</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member2} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Enda foley</span>
                                    <span className=" block text-[14px]">Chief Officer</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member3} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Col Medway</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member4} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Danny Thomas</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member5} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Tim Mickinnon</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member6} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Peter Sagar</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                        </div>
                    </div>

                    <div className="container team md:px-20 px-5 md:pb-16 ">
                        <h4 className="text-[28px] leading-[37px] font-[600] text-[#004a8b]">Agribusiness Transactions</h4>


                        <div className=" pt-5 md:px-0  flex flex-wrap flex-row  gap-3 md:gap-5">

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member6} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Robin Blain</span>
                                    <span className=" block">Chairmen</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member7} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Enda foley</span>
                                    <span className=" block ">Director</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member3} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Col Medway</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member4} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Danny Thomas</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member5} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Tim Mickinnon</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member6} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Peter Sagar</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            
                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member1} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Danny Thomas</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member2} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Tim Mickinnon</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member4} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Peter Sagar</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>



                        </div>
                    </div>


                    <div className="container team md:px-20 px-5 md:pb-16 ">
                        <h4 className="text-[28px] leading-[37px] font-[600] text-[#004a8b]">Agribusiness Valuations</h4>


                        <div className=" pt-5 md:px-0  flex flex-wrap flex-row  gap-3 md:gap-5">

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member2} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Robin Blain</span>
                                    <span className=" block">Chairmen</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member3} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Enda foley</span>
                                    <span className=" block ">Director</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member7} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Col Medway</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>

                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member4} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Danny Thomas</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member5} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Tim Mickinnon</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member6} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Peter Sagar</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            
                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member1} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Danny Thomas</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member2} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Tim Mickinnon</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>


                            <div className="md:w-[23%] w-[45%] relative group overflow-hidden">
                                <img src={member4} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                </span>

                                <span className=" md:text-white text-black bg-white md:bg-transparent md:absolute relative block pt-3 pb-8 px-2 w-full md:top-52 top-0 md:p-5  ">
                                    <span className="font-bold block">Peter Sagar</span>
                                    <span className=" block">Senior Director</span>
                                </span>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Team
