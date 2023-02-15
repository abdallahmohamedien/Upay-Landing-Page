import React , {Component}  from "react";
import { FaInstagram ,FaLinkedin , FaFacebook,FaTwitter,FaGooglePlay, FaAppStore} from "react-icons/fa";
import logo from '../images/Vector.png';

class Footer extends Component{
    render(){
        return (
            <div className="p-10 mb-px md:-mr-0 -mr-28 bg-[#C3EAD8] max-w-10xl grid grid-cols-1">
                <div className="mb-4">
                    <img src={logo} alt="" width={100}/>
                </div>
                <div className="md:grid md:grid-cols-2 grid-rows-1">
                    <div className="">
                        <h1 className="font-bold text-3xl">Upay</h1>
                        <p className="text-sm w-40 mt-4">The cost of doing
                            business shouldn’t
                            cost so damn much.
                        </p>
                        <div className="flex flex-row mt-4">
                            <a href="#"> <FaLinkedin className="" size={25}/> </a>
                            <a href="#"> <FaFacebook className="ml-4" size={25}/> </a>
                            <a href="#"> <FaInstagram className="ml-4" size={25}/> </a>
                            <a href="#"> <FaTwitter className="ml-4" size={25}/> </a>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 sm:grid-rows-1 ">
                        <div className="mr-14 mt-4">
                            <h1 className="font-bold text-2xl">Get in touch</h1>
                            <p className="mt-4">helloupay@email.com</p>
                            <p className="mt-4">734 Broadway, Floor 5 New York, NY 10003 </p>
                        </div>
                        <div className="mt-4">
                            <h1 className="font-bold text-3xl">Jump To </h1>
                                <div className="grid grid-rows-4 mt-4">
                                    <a href='#home'>Home</a>
                                    <a href='#services'>Services</a>
                                    <a href='#pricing'>Pricing</a>
                                    <a href='#about'>About Us</a>
                                    <a href='#contact'>Contact</a>
                                </div>    
                        </div>
                        <div className="mt-4">
                            <h1 className="font-bold text-3xl">Legal</h1>
                            <div className="mt-4">
                                <a href="#">Terms of Use</a><br></br>
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div className="mt-4">
                                <h1 className="font-bold text-2xl">Get The App</h1>
                                <div className="flex mt-4">
                                    <h1><a href=""><FaGooglePlay size={30}/></a></h1>
                                    <h1><a href=""><FaAppStore size={30} className="ml-6"/></a></h1>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
export default Footer;