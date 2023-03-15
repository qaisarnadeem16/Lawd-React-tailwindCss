import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showSearchList, setShowSearchList] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function toggleList() {
        setShowSearchList(!showSearchList);
    }
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div className="container sticky top-0 bg-white z-50" >
                <div className="Header flex justify-between items-center py-4 md:px-20 md:ml-10 px-5 relative z-50">
                    <div className="" >
                    <Link to='/' >    <img src={logo} alt="" width='200px' className={`transition-all duration-300 ${isScrolled ? 'logo-small' : ''}`} /></Link>
                    </div>
                    <div className="flex items-center gap-10 text-[#004A8B] text-[16px] font-bold">

                    {/* {showSearchList ? : ''} */}

                        <div className="md:block hidden"> {showSearchList ? <button className="flex  text-[#004A8B] text-[16px] font-bold " onClick={toggleList}>SEARCH LISTINGS <RiArrowDropUpLine className='text-[1.7rem]' /></button> :
                            <button className="flex " onClick={toggleList}>SEARCH LISTINGS <RiArrowDropDownLine className='text-[1.7rem]' /></button>}</div>



                        {showMenu ? <button onClick={toggleMenu}> <RxCross1 className='text-[2rem] text-white' /></button>
                            : <button onClick={toggleMenu}> <GiHamburgerMenu className={`text-[2rem] `} /></button>}

                    </div>
                </div>

                {/* // search LISTINGS  */}
              {showSearchList?  <div className="closeSearch" onClick={toggleList}></div> :''}
                <div className={`${showSearchList ? "visible" : "hidden"} w-[17%] absolute top-0 right-[7rem] bg-white py-10 px-7  z-20`}>

                    <div className="mt-7 w-full">
                        <select className='w-full py-3 border-b border-gray-200' >
                            <option value="current">For Sale</option>
                            <option value="">  <Link to='./Sold'> Sold</Link></option>

                        </select>
                    </div>

                    <div className="mt-5 w-full">
                        <select className='w-full py-3 border-b border-gray-200' p >
                            <option value="current">Sate</option>
                        </select>
                    </div>
                    <div className="mt-5 w-full  border-b border-gray-200 pb-2">
                        <h5>Subrub</h5>
                    </div>

                    <div className="mt-4 w-full">
                        <select className='w-full py-2 border-b pb-2 border-gray-200' >
                            <option value="current">Property Type</option>
                        </select>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-3">
                        <h5>Min Price</h5>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-3">
                        <h5>Max Price</h5>
                    </div>

                    <div className="mt-5 w-full border-b border-gray-200 pb-3">
                        <h5>Min Area</h5>
                    </div>
                    <div className="mt-5 w-full border-b border-gray-200 pb-3">
                        <h5>Max Area</h5>
                    </div>
                    <div className="mt-14 bg-[#004A8B] py-2 pl-5 ">
                        <Link to='./SearchPage' >
                        <button  className="flex gap-5 items-center text-bold text-white text-lg">
                            <h1>Search Now</h1>
                            <BiSearch />
                        </button>
                        </Link>

                    </div>



                </div>


                {/* menu bar  */}

                <div className={`flex md:pl-40 md:items-center md:pt-0 pt-16 bg-[#004A8B] ${showMenu ? "md:w-[80%] w-[100%]" : "hidden"} z-10  h-[135vh] absolute md:top-[-300px] md:right-[-370px] top-0 right-0   md:rounded-[50%]  transition-all duration-300 `}>


                    <div className=" flex md:flex-row flex-col text-white gap-2 md:gap-[8rem] md:mt-[15rem] md:pl-0 pl-5 ">

                        <div className="flex flex-col items-start gap-1 ">
                            <button className='text-2xl font-bold  hover:text-gray-300 md:mb-2'>Home</button>

                            <h1 className='font-bold text-[1.5rem]'>What we do</h1>

                            <Link to='./SearchPage' >  <button className='text-2xl font-medium hover:text-gray-300'>For Sale</button></Link>
                            <Link to='./trackRecord' > <button className='text-2xl font-medium hover:text-gray-300'>Our Track Record</button></Link>

                            <button className='text-2xl font-medium hover:text-gray-300'>Our Services</button>
                            <Link to='./Advisory' >
                            <button className='text-2xl font-medium hover:text-gray-300 flex items-center gap-2'><div className="w-[17px] h-[5px] bg-gray-200"></div>Advisory</button> </Link>
                            <Link to='./Transaction' >
                            <button className='text-2xl font-medium hover:text-gray-300 flex items-center gap-2'><div className="w-[17px] h-[5px] bg-gray-200"></div>Transaction</button>
                            </Link>
                            <Link to='./Valuation' >
                            <button className='text-2xl font-medium hover:text-gray-300 flex items-center gap-2'><div className="w-[17px] h-[5px] bg-gray-200"></div>Valuations</button>
                            </Link>
                        </div>


                        <div className="flex flex-col gap-1 items-start">

                            <h1 className='font-bold text-[1.5rem]'>About us</h1>

                            <Link to='./OurStory' > <button className='text-2xl font-medium hover:text-gray-300'>Our Story</button></Link>
                            <Link to='./Communities' > <button className='text-2xl font-medium hover:text-gray-300'>Our communities</button></Link> 

                            <Link to='./Team' >  <button className='text-2xl font-medium hover:text-gray-300'>Meet our Team</button></Link>
                            <Link to='./JoinOurTeam' >  <button className='text-2xl font-medium hover:text-gray-300'>Join our Team</button></Link>
                            <Link to='./News' >   <button className='text-2xl font-bold  hover:text-gray-300 md:py-4'>News</button></Link>
                            <Link to='./Contact' > <button className='text-2xl font-bold  hover:text-gray-300 md:py-2'>Connect</button></Link>

                            <div className="flex md:py-3 gap-2">
                                <button className='text-[1.9rem]'><BsFacebook /></button>
                                <button className='text-2xl rounded-full bg-white p-1 '><BsInstagram className='text-blue-500' /></button>
                                <button className='text-2xl rounded-full bg-white p-1 '><CiLinkedin className='text-blue-500' /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
