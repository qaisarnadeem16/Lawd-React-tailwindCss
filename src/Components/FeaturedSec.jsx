
import { MdLocationOn } from 'react-icons/md'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f3.jpg'
import f3 from '../assets/f2.jpg'
import { Link } from 'react-router-dom'

const FeaturedSec = (props) => {

    return (
        <>
            <div className="container feature  px-5 md:px-[10rem] md:pt-5 relative">
                <div className="md:text-[40px] text-[34px] font-black  text-[#004a8b] md:leading-[48px]">
                    <h1 className="">{props.title}</h1>
                    <div className="w-[63px] h-[6px] bg-[#b5d1b3] mt-3"></div>
                </div>
                     <div className="text-[#004a8b] font-bold border-b-2 pb-1 border-[#004a8b] absolute md:right-[10rem] right-6 top-[6rem] hover:text-green-200 ">
                        <h1>View All Listings</h1>
                     </div>
                <div className="py-20 flex flex-col md:flex-row gap-10">
                    <div className="md:w-[32%] w-full flex flex-col  group" >
                    <Link to='PropertyPage'>
                        <div className="img relative">
                            <img src={f1} alt="" />
                            
                            <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[100%] bg-[rgba(0,74,139,0.6)]" >
                                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                                    <span className="font-bold text-center">FIND OUT MORE</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#EAF1F7] px-3 py-2 absolute top-3 left-3 font-medium">
                                    <h5>EOI</h5>
                                </div>
                        </div>
                        </Link>


                        <div className="txt flex flex-col">
                            <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn /><h5>Bowen</h5></div>
                            <span className="font-bold md:text-xl text-black">376 Mt Dangar Road</span>
                            <span className="text-gray-500">1223 ha</span>
                        </div>
                    </div>

                    <div className="md:w-[32%] w-full flex flex-col  group" >
                    <Link to='PropertyPage'>

                        <div className="img relative">
                            <img src={f2} alt="" />
                            <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[100%] bg-[rgba(0,74,139,0.6)]" >
                                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                                    <span className="font-bold text-center">FIND OUT MORE</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#EAF1F7] px-3 py-2 absolute top-3 left-3 font-medium">
                                    <h5>EOI</h5>
                                </div>
                        </div>
                        </Link>


                        <div className="txt flex flex-col">
                            <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn /><h5>Bowen</h5></div>
                            <span className="font-bold md:text-xl text-bck">1632 Rankins Springs Road</span>
                            <span className="text-gray-500">1223 ha</span>
                        </div>
                    </div>
                    <div className="md:w-[32%] w-full flex flex-col  group" >
                    <Link to='PropertyPage'>

                        <div className="img relative">
                            <img src={f3} alt="" />
                            <div className="group-hover:opacity-100 absolute top-0 opacity-0 w-[100%] h-[100%] bg-[rgba(0,74,139,0.6)]" >
                                <div className="p-2 border-t border-b border-white text-white absolute top-[6rem] left-[7rem] bg-red-30">
                                    <span className="font-bold text-center">FIND OUT MORE</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#EAF1F7] px-3 py-2 absolute top-3 left-3 font-medium">
                                    <h5>EOI</h5>
                                </div>
                        </div>
                        </Link>


                        <div className="txt flex flex-col">
                            <div className="text-[#004a8b] font-bold pt-4 flex "><MdLocationOn /><h5>Bowen</h5></div>
                            <span className="font-bold md:text-xl text-black">139 Douglas Road</span>
                            <span className="text-gray-500">1223 ha</span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default FeaturedSec
