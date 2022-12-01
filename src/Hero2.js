import React , {Component}  from "react";
import { MdCreditScore } from 'react-icons/md';
import { BsLightningCharge ,BsEmojiSmile} from 'react-icons/bs';
import {FaRegNewspaper} from 'react-icons/fa'
import './Hero2.css';

class Hero2 extends Component{
    render(){
        return(
            <div className="why">
                <div className="heading2">
                    <h1>Why Upay</h1>
                    <p>Please add a amount an account with whom you want to 
                        send your money and we will keep it very safe.
                    </p>
                </div>
                <div className='why-box'>
                        <div className='box1'>
                            <h1> <span> <MdCreditScore /></span>Secure</h1>
                            <p>Secure
                                Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.
                                Learn more...
                            </p>
                            <a href='#learn'>Learn more...</a>
                        </div>
                        <div className='box2'>
                            <h1> <span><BsLightningCharge /> </span>Instant</h1>
                            <p>
                                Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.
                            </p>
                            <a href='#learn'>Learn more...</a>
                        </div>
                </div>
                <div className="why-box2">
                    <div className='box3'>
                            <h1><span><FaRegNewspaper /> </span>Fee-Free</h1>
                            <p>
                                Upay transactions are protected by the latest encryption and security technology. We also leveragePlaid to keep businesses in our database safe.  
                            </p>
                            <a href='#learn'>Learn more...</a>
                     </div>
                     <div className='box3'>
                            <h1><span><BsEmojiSmile /> </span>Simple</h1>
                            <p>
                                Upay transactions are protected by the latest encryption and security technology. We also leveragePlaid to keep businesses in our database safe.  
                            </p>
                            <a href='#learn'>Learn more...</a>
                     </div>
                </div>
            </div>
        )
    }
}
export default Hero2;