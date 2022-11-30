import React , {Component}  from "react";
import { FaInstagram ,FaLinkedin , FaFacebook,FaTwitter} from "react-icons/fa";
import logo from './Vector.png';
import './Footer.css';
class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <div className="vector">
                    <img src={logo} alt=""/>
                </div>
                <div className="info">
                    <div className="company">
                        <h1>Upay</h1>
                        <p>The cost of doing
                            business shouldn’t
                            cost so damn much.
                        </p>
                        <div className="social">
                            <a href="#"> <FaLinkedin /> </a>
                            <a href="#"> <FaFacebook /> </a>
                            <a href="#"> <FaInstagram /> </a>
                            <a href="#"> <FaTwitter /> </a>
                        </div>
                    </div>
                    <div className="info2">
                        <div className="box">
                            <h1>Get in touch</h1>
                            <p>helloupay@email.com</p>
                            <p>734 Broadway, Floor 5
                                New York, NY 10003
                            </p>
                        </div>
                        <div className="jump">
                            <h1>Jump To </h1>
                                <div className="links">
                                    <a href='#home'>Home</a>
                                    <a href='#services'>Services</a>
                                    <a href='#pricing'>Pricing</a>
                                    <a href='#about'>About Us</a>
                                    <a href='#contact'>Contact</a>
                                </div>    
                        </div>
                        <div className="box0">
                            <h1>Legal</h1>
                            <div className="term">
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                            </div>
                            <h1>Get The App</h1>
                           
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
export default Footer;