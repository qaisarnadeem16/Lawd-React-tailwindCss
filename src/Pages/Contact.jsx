import React from "react";
import { Link } from "react-router-dom";
import map from "../assets/map2.PNG";

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="heading py-10 px-5 flex md:ml-[25rem]">
                    <div className="">
                        <h1 className="md:text-[40px] text-[36px]  font-[900] text-[#004a8b]">
                            Our Office
                        </h1>
                        <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                    </div>
                </div>

                <div className="container  py-10 px-5 md:px-40">
                    <div className="flex gap-5 md:flex-row flex-col">
                        <div className="w-[100%] md:w-[30%]">
                            <div className="">
                                <h3 className="text-[#004a8b] md:text-[33px] text-[24px] font-black">Victoria</h3>
                                <span className="text-[20px] block text-[#004a8b]">+61 3 8361 8110</span>
                                <span className="text-[16px]">level 26/80 Collins Street, Melbourne VIC, Australia.</span>
                            </div>

                            <div className="pt-5">
                                <h3 className="text-[#004a8b]  md:text-[33px] text-[24px] font-black">Queensland</h3>
                                <span className="text-[20px] block text-[#004a8b]">+61 3 8361 8110</span>
                                <span className="text-[16px]">The Annex, Suite 1.1, Level 1, 12 Creek Street, Brisbane Qld 4000.</span>
                            </div>


                            <div className="pt-5">
                                <h3 className="text-[#004a8b] md:text-[33px] text-[24px] font-black">New South Wales</h3>
                                <span className="text-[20px] block text-[#004a8b]">+61 3 8361 8110</span>
                                <span className="text-[16px]">The Annex, Suite 1.1, Level 1, 12 Creek Street, Brisbane Qld 4000.</span>
                            </div>


                            <div className="pt-5">
                                <h3 className="text-[#004a8b]  md:text-[33px] text-[24px] font-black">Western Australia</h3>
                                <span className="text-[20px] block text-[#004a8b]">+61 3 8361 8110</span>
                                <span className="text-[16px]">The Annex, Suite 1.1, Level 1, 12 Creek Street, Brisbane Qld 4000.</span>
                            </div>


                            <div className="pt-5">
                                <h3 className="text-[#004a8b] text-[20px] font-black">info@lawd.com.au</h3>

                            </div>
                        </div>





                        <div className="w-[100%] md:w-[70%]">
                            <img src={map} alt="" width="100%" />
                        </div>
                    </div>
                </div>

                <div className="container md:px-10 ">
                    <div className="bg-[#f1f2f2] md:py-16 form">
                        <div className="heading py-10 px-5 flex md:ml-[23rem]">
                            <div className="">
                                <h1 className="text-[40px] font-[900] text-[#004a8b]">
                                    Contact Us
                                </h1>
                                <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                            </div>
                        </div>

                        <div className="md:mx-[23rem] py-7 px-5">
                            <div className="flex flex-wrap gap-7">
                                <input type="text" className="md:w-[45%] w-full border-b border-[#b5d1b3] bg-transparent py-2 text-[14px] text-black" value="FIRST NAME" />
                                <input type="text" className="md:w-[45%] w-full border-b border-[#b5d1b3] bg-transparent py-2 text-[14px] text-black" value="SURNAME" />
                                <input type="text" className="md:w-[45%] w-full border-b border-[#b5d1b3] bg-transparent py-2 text-[14px] text-black" value="TELEPHONE" />
                                <input type="email" className="md:w-[45%] w-full border-b border-[#b5d1b3] bg-transparent py-2 text-[14px] text-black" value="EMAIL" />
                                <textarea type="email" className="w-full border-b border-[#b5d1b3] bg-transparent py-2 text-[14px] text-black" value="YOUR ENQUIRY" col='50' rows='5' />

                                <div className="flex gap-3 items-center w-full">
                                    <input id="published" class="peer/published" type="radio" name="status" className="w-5 h-5" />
                                    <label for="published" class="text-[14px]">I accept LAWD’s <Link t0='' className="underline decoration-1">Privacy Policy</Link> .</label>
                                </div>

                                <div className="">
                                    <button className="  py-[.5rem] px-[1.4rem] text-[13px] border bg-[#004a8b] text-white  hover:text-[#004a8b] hover:bg-[#B5D1B3]">SUBMIT</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Contact;
