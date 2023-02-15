import React , {Component}  from "react";
import logo from "../images/Group.png";
import iPhone from "../images/iPhone 14 Pro.png";
import Character from "../images/Character.png";
import { BsCloudDownload ,BsBarChart} from "react-icons/bs";
import {FaHands} from "react-icons/fa"


class Hero extends Component{
    render(){
        return(
            <div className="flex md:flex-row md:w-screen w-max flex-col py-20 bg-[#C3EAD8] ">
                <div className="md:ml-14 ml-4 p-10">
                    <div className=" text-black ml-2 font-bold text-5xl">
                        <h1>Easy way to make <br /> online payments <br /> and secure</h1>
                    </div>
                    <div className="px-2 py-4">
                        <p>Pay and get paid in real-time with zero fees. <br />
                        Secure, streamlined, and super fast.</p>
                    </div>
                    <div className='mt-10 ml-1 bg-black hover:bg-white shadow-lg md:w-44 font-medium w-32 md:mr-44 h-11 rounded-3xl text-sm py-2.5'>
                    <a href="lo" className='flex justify-center rounded-lg text-sm text-white font-semibold mb-4'>Download <BsCloudDownload className="mt-1 ml-2"/></a>
                </div>
                <div className="flex mt-12">
                <h2 className="mt-3"><BsBarChart size={25} className=''/></h2>
                    <div className="flex ml-2">
                        
                        <p>
                            Years <br />
                            of experience
                        </p>
                    </div>
                    <h2 className="ml-4 mt-2"><FaHands size={25} className=''/></h2>
                    <div className="flex ml-4">
                        
                        <p className="text-sm">
                            Satisfide and <br /> 
                            happy customurs
                        </p>
                    </div>
                </div>
                </div>
                <div className=" md:ml-44">
                    <div className=''>
                        <img src={logo} alt="" className='absolute'/>
                        <img src={iPhone} alt="" className='absolute ml-52 md:ml-96 h-96 md:mt-16' />
                        <img src={Character} alt="" className='absolute md:px-32 ml-80 md:ml-96 h-96 md:mt-16'/>
                    </div> 
                    <div className="mt-80 mb-16 ml-20 md:px-44 py-10 ">
                        <div className=" w-40 h-44 bg-white rounded-md justify-center items-center absolute">
                            <div className="flex ">
                                <div className="ml-6 w-2 h-14 mt-4 bg-[#E6E9F0]"></div>
                                <div className="ml-4 w-2 h-16 mt-4 bg-[#E6E9F0]"></div>
                                <div className="ml-4 w-2 h-20 mt-4 bg-[#5D80D9]"></div>
                                <div className="ml-4 w-2 h-8 mt-4 bg-[#E6E9F0]"></div>
                                <div className="ml-4 w-2 h-14 mt-4 bg-[#E6E9F0]"></div>
                            </div>
                            <h1 className="ml-4 mt-2">Monthly Activities</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero;