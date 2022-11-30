import React , {Component}  from "react";
import logo from "./Group.png";
import iPhone from "./iPhone 14 Pro.png";
import Character from "./Character.png";
import { BsCloudDownload } from "react-icons/bs";
import './Hero.css';

class Hero extends Component{
    render(){
        return(
            <div className="hero">
                <div className="heading">
                    <div className="easy">
                        <h1>Easy way to make online payments and secure</h1>
                    </div>
                    <div className="pay">
                        <p>Pay and get paid in real-time with zero fees.
                        Secure, streamlined, and super fast.</p>
                    </div>
                </div>
                <div className="btn-download">
                    <a href='#down'>  <BsCloudDownload /> Download App </a>
                </div>
                <div className="v-card">
                <img src={logo} alt="Logo" />
                </div>
                <div className="iphone">
                <img src={iPhone} alt="Logo" />
                </div>
                <div className="character">
                <img src={Character} alt="Logo" />
                </div>
                <div className="content-box">
                    <div className="experience">
                        <p>
                             Years 
                             of experience
                        </p>
                    </div>
                    <div className="customer">
                        <p>
                            Satisfide and 
                            happy customurs
                        </p>
                    </div>
                </div>
                <div className="frame">
                    <div className="frame1">
                        <div className="a1"></div>
                        <div className="a2"></div>
                        <div className="a3"></div>
                        <div className="a4"></div>
                        <div className="a5"></div>
                    </div>
                    <div className="monthly">
                        <p>Monthly Activities</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero;