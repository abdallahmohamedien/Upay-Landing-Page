import React , {Component}  from "react";
import { FaUserPlus } from "react-icons/fa";
import logo from './Vector.png';
import './Header.css';
class Header extends Component{
    render(){
        return (
            <div className="header">
                <div className="logo-nav-menu">
                <div className="logo">
                    <img src={logo} alt="Logo" /> Upay
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#connect">Contact</a></li>
                    </ul>
                </div>    
                </div>
                <div className="btn">
                    <div className="btn-login">
                        <a href='#login'>Login </a>
                    </div>
                    <div className="btn-signup">
                        <a href='#signup'>SignUp  <FaUserPlus /> </a>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;