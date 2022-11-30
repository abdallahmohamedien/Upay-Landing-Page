import React , {Component}  from "react";
import Down from "./Character1.png";
import Registration from "./Illustration1.png";
import Load from "./Illustration.png";
import Ready from "./Character2.png";
import './Hero1.css';

class Hero1 extends Component{
    render(){
        return(
            <div className="how">
                <div className="heading1">
                    <h1>How Dose It Work</h1>
                </div>
                <div className="content-box1">
                    <div className="title-box">
                        <img src={Down } alt=""/>   
                        <h1>Download App</h1> 
                        <p>But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#1'>Read more...</a>
                    </div>
                    <div className="title-box">
                    <img src={Registration } alt=""/>   
                        <h1>Registration Step</h1> 
                        <p>But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#2'>Read more...</a>
                    </div>
                    <div className="title-box">
                    <img src={Load } alt=""/>   
                        <h1>Laod Your Wallet</h1> 
                        <p>But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#3'>Read more...</a>
                    </div>
                    <div className="title-box">
                    <img src={Ready } alt=""/>   
                        <h1>Ready To go</h1> 
                        <p>But must explain mistake denouncie pleasure praisin was born compltet</p>
                        <a href='#4'>Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero1;