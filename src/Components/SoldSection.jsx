import React from 'react'// requires a loader
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md'
import sold from '../assets/sold.png'
import f4 from '../assets/f4.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f3.jpg'
import f3 from '../assets/f2.jpg'
import f5 from '../assets/f5.jpg'
import f6 from '../assets/f6.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{  display: "block",color:'white ',fontSize:'1.5rem', backgroundColor:'transparent', zIndex:'1' ,position:'absolute' , top: '12rem' , right: 20}}
      onClick={onClick} >  <MdKeyboardArrowRight />
      </div>
  );
}
function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div
    style={{  display: "block",color:'white ',fontSize:'1.5rem', backgroundColor:'transparent', zIndex:'1' ,position:'absolute' , top: '12rem' , left: 20}}
    onClick={onClick} >  <MdKeyboardArrowLeft />
    </div>
  );
}

const SoldSection = () => {

  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  return (
    <>
      <div className="container md:px-40 px-5 feature pb-20 ">

        <div className="pt-20  flex flex-col md:flex-row gap-10">
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f4} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f1} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f3} alt="" />
                </div>
                <div key="slide2">
                  <img src={f4} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>

        </div>

        <div className="pt-10  flex flex-col md:flex-row gap-10">
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f2} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f4} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f5} alt="" />
                </div>
                <div key="slide2">
                  <img src={f4} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>

        </div>



        <div className="pt-20  flex flex-col md:flex-row gap-10">
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f6} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f1} alt="" />
                </div>
                <div key="slide2">
                  <img src={f2} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                {/* <h5>$1,175,000</h5> */}
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>
          <div className="md:w-[32%] w-full flex flex-col  group" >
            <div className="img relative ">
              <Slider {...settings}>
                <div key="slide1">
                  <img src={f3} alt="" />
                </div>
                <div key="slide2">
                  <img src={f4} alt="" />
                </div>
              </Slider>

              <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[97%] bg-[rgba(0,74,139,0.6)]" >
                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                  <span className="font-bold text-center">FIND OUT MORE</span>
                </div>
              </div>

              <div className=" absolute top-0 left-0 ">
                <img src={sold} alt="" />

              </div>
            </div>


            <div className="txt flex flex-col">
              <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn className='text-[18px]' /><h5>Yass</h5></div>
              <span className="text-bold text-xl text-black">376 Mt Dangar Road</span>
              <span className="text-gray-500">1223 ha</span>
            </div>
          </div>

        </div>

      </div>



    </>
  )
}

export default SoldSection
