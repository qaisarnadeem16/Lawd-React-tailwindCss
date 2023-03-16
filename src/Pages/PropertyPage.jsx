import React, { useState } from 'react'
import Slider from "react-slick";
import { BsArrowLeft } from 'react-icons/bs'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/f1.jpg'
import slider4 from '../assets/f3.jpg'
import slider5 from '../assets/f2.jpg'
import member1 from '../assets/team4.jpg'
import member2 from '../assets/team6.jpg'
import { Link } from 'react-router-dom';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SideIcon from '../Components/SideIcon';
import tick from '../assets/true.PNG'
import FeaturedSec from '../Components/FeaturedSec';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] md:text-[#b5d1b3] text-white md:top-16 bottom-10 right-5 md:right-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick} className='block  absolute md:text-[2.5rem] text-[1.3rem] md:text-[#b5d1b3] text-white  md:top-16 bottom-10 left-5 md:left-[-4rem] z-10 hover:text-[#004a8b]'>  <SlArrowLeft />
        </div>
    );
}

const PropertyPage = () => {
    const [showImage, setShowImage] = useState(slider1)

    const handleClick = (event, imageSrc) => {
        setShowImage(imageSrc);
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <SideIcon />
            <div className="main relative md:px-8 ">
                <div className="arrow text-white text-[2rem] top-5 md:left-16 left-4 absolute z-10">
                    <Link to='/SearchPage'>  <BsArrowLeft /></Link>
                </div>
                <div className="flex md:flex-col flex-col-reverse ">
                    <div className="container flex flex-col md:flex-row  ">


                        <div className="md:w-[40%] h-[500px] bg-[#004a8b] relative " >

                            <div className="md:px-36 px-5">
                                <div className="w-[132px] bg-[#b5d1b3] absolute top-0  p-5">
                                    <div className="text-[12px] font-black  text-white  text-center ">
                                        <span className="">EOI</span>
                                        <div className="w-[65px] h-[6px] bg-white mt-1 ml-3"></div>
                                    </div>
                                </div>

                                <div className=" text-white relative md:top-32 top-24">
                                    <h2 className="md:text-[37px] text-[27px] md:leading-[48px] leading-[34px] font-black">LARGE-SCALE VEGETABLE PRODUCTION OPPORTUNITY</h2>
                                    <div className="w-[65px] h-[6px] bg-[#b5d1b3]  mt-5"></div>

                                    <div className="label text-white pt-6">
                                        <div className="">
                                            <span className="font-bold text-[14px]">Price</span>
                                            <span className="text-normal ml-24">EOI</span>
                                        </div>
                                        <div className="pt-5">
                                            <span className="font-bold text-[14px]">Size</span>
                                            <span className="text-normal ml-24">1223 ha</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="carousel w-[60%] md:block hidden   ">
                            <img src={showImage} alt="" className="w-full h-[500px]" />

                        </div>

                    </div>

                    <div className=" md:pt-10 md:px-40">
                        <Slider {...settings} >
                            <div className="w-[19%]  overflow-hidden md:pl-5 focus:outline-none">
                                <img src={slider1} alt="" width='100%' onClick={(event) => handleClick(event, slider1)} />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, slider2)}>
                                <img src={slider2} alt="" width='100%' />
                            </div>

                            <div className="w-[150px] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, slider3)}>
                                <img src={slider3} alt="" width='100%' />
                            </div>

                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, slider4)}>
                                <img src={slider4} alt="" width='100%' />
                            </div>
                            <div className="w-[19%] overflow-hidden  md:pl-5 focus:outline-none" onClick={(event) => handleClick(event, slider5)}>
                                <img src={slider5} alt="" width='100%' />
                            </div>

                        </Slider>
                    </div>

                </div>

                <div className="text md:px-40 px-5 md:py-16 py-5 flex flex-col md:flex-row">
                    <div className="md:w-[40%] ">
                        <div className="">
                            <h3 className="text-[23px] md:w-[300px]  leading-[30px] font-[600] text-[#004a8b]  m-1">376 Mt Dangar Road, BOWEN QLD 4805</h3>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-[23px] md:w-[300px] leading-[30px] font-[600] text-[#004a8b]  m-1">Features</h3>

                            <span className=" flex gap-1 pt-1 items-center"><span className=""><img src={tick} alt="" /></span>Land is 1,223 ha</span>
                        </div>
                    </div>

                    <div className="md:w-[60%] ">
                        <p className="pt-6 md:pt-0 ">
                            RMS Advisory and LAWD are pleased to present for sale Donmore Farms (the Property), a profitable irrigated small crop and horticulture enterprise located 17* kilometres south-west of Bowen.
                        </p>

                        <p className="pt-6">
                            Comprising 1,223* hectares, the Property’s unique characteristics of soils, water entitlements, infrastructure and layout also support supplementary non-irrigated row cropping and livestock activities
                        </p>
                        <p className="pt-6">
                            The Property is ideally suited to an investor seeking to capitalise on existing market penetration in product categories that have proven resilient to rising inflation and drive asset value through land use conversion to expand irrigated production.
                        </p>
                        <p className="pt-6">
                            <li> Located in a region with climatic conditions suited to the production of high-value fruit and vegetables. </li>
                            <li>  A total land area of 1,223* hectares, including 461* hectares developed for small crop irrigation. </li>
                            <li>  78* hectares developed to mangos offering counter-cyclical cashflows to small cropping activities. </li>
                            <li>  High-quality infrastructure to facilitate grading, packing and cool storage requirements of vegetable and fruit crops. </li>
                            <li>  Significant annual water extraction entitlements of 1,676* megalitres. </li>
                            <li>  2,750* megalitres of on-farm storage to facilitate the capture and use of overland flows. </li>
                            <li>  Productive and versatile mix of soil t  ypes include sandy loams, clay loams and self-mulching clays. </li>
                            <li> Experienced management team with a proven track record in horticultural and row cropping, who has overseen the development of the property to its present state. </li>
                            <li>    Exciting future growth opportunities, including further development of irrigable areas. </li>
                        </p>

                        <p className="pt-6">
                            RMS Advisory and LAWD are offering the Property to the market by Expression of Interest, in one line or as separate assets, on a walk-in walk-out (WIWO) basis inclusive of all plant and equipment and water entitlements closing 4pm (AEDT) Wednesday 8 March 2023.
                        </p>

                        <div className="pt-6">
                            Danny Thomas <br />
                            dannythomas@lawd.com.au <br />
                            +61 439 349 977 <br />
                        </div>

                        <div className="pt-6">
                            Peter Ryan  <br />
                            Peter.ryan@rmsadvisory.com.au <br />
                            +61 418 818 444 <br />
                        </div>
                        <div className="pt-6">
                            Jarrod Ryan  <br />
                            jarrod.ryan@rmsadvisory.com.au <br />
                            +61 417 848 595 <br />
                        </div>
                        <div className="pt-6">
                            *approximately
                        </div>

                        <div className="agent md:pt-16">
                            <div className="">
                                <h1 className="text-[40px] font-[900] text-[#004a8b]">Agents</h1>
                                <div className="w-[63px] h-[8px] bg-[#b5d1b3] mt-3"></div>
                            </div>


                            <div className=" pt-5 md:px-0  flex flex-wrap flex-row  gap-3 md:gap-5">

                                <div className="md:w-[45%] w-[100%] relative group overflow-hidden">
                                    <img src={member1} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                    <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                    </span>

                                    <span className="  text-[#004a8b] bg-white  relative block pt-3 pb-8 px-2 w-full  top-0 md:p-5  ">
                                        <span className=""> +61 439 349 977</span>
                                        <span className="font-bold block">DAnny Thomas</span>

                                    </span>
                                </div>


                                <div className="md:w-[45%] w-[100%] relative group overflow-hidden">
                                    <img src={member2} alt="" width='100%' height='auto' className='group-hover:scale-110 transition-all duration-500 ease-out' />
                                    <span className="text-[16px] bg-[rgba(0,74,139,0.6)] w-full h-full text-white absolute top-0 left-0  ">
                                    </span>

                                    <span className="  text-[#004a8b] bg-white  relative block pt-3 pb-8 px-2 w-full  top-0 md:p-5  ">
                                        <span className=""> +61 439 349 977</span>
                                        <span className="font-bold block">Elizabeth Doyle</span>

                                    </span>
                                </div>

                                <div className="pt-3 w-[93%]">
                                    <div className=" text-[1rem] text-center text-[#004a8b] py-[.6rem] px-[1.8rem] border border-[#004a8b]  hover:text-white hover:bg-[#004a8b]">Contact Agent</div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <FeaturedSec title='Similar Listings' />




            </div>

        </>
    )
}

export default PropertyPage
