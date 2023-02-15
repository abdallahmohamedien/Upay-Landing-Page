import React , {Component}  from "react";
import Down from "../images/Character1.png";
import Registration from "../images/Illustration1.png";
import Load from "../images/Illustration.png";
import Ready from "../images/Character2.png";


class Hero1 extends Component{
    render(){
        return(
            <div className="mt-6 ">
                <div className="flex justify-center md:ml-0 ml-20 items-center mb-6">
                    <h1 className="font-bold text-4xl">How Dose It Work</h1>
                </div>
                <div className="grid md:grid-cols-4 px-20">
                    <div className="px-8 w-auto mt-2 rounded-lg hover:shadow-2xl ">
                        <img src={Down } alt="" className="ml-12"/>   
                        <h1 className="text-2xl ml-12 items-center">Download App</h1> 
                        <p className="text-lg ml-6">But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#1' className="ml-20 font-semibold">Read more...</a>
                    </div>
                    <div className="px-4 w-80 mt-2 rounded-lg hover:shadow-2xl">
                    <img src={Registration } alt="" className="ml-12"/>   
                        <h1 className="text-2xl ml-12 items-center">Registration Step</h1> 
                        <p className="text-lg ml-6">But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#2' className="ml-20 font-semibold">Read more...</a>
                    </div>
                    <div className="px-6 w-80 mt-2 rounded-lg hover:shadow-2xl">
                    <img src={Load } alt="" className="ml-12"/>   
                        <h1 className="text-2xl ml-12 items-center">Laod Your Wallet</h1> 
                        <p className="text-lg ml-6">But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#3' className="ml-20 font-semibold">Read more...</a>
                    </div>
                    <div className="px-4 w-80 mt-2 rounded-lg hover:shadow-2xl">
                    <img src={Ready } alt="" className="ml-12"/>
                        <h1 className="text-2xl ml-12 items-center">Ready To go</h1> 
                        <p className="text-lg ml-6">But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#4' className="ml-20 font-semibold">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero1;