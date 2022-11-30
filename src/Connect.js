import React , {Component}  from "react";
import Photo from './Groups.png'
import './Connect.css';
class Connect extends Component{
    render(){
        return(
            <div className="connect">
                <div className="logo5">
                    <img src={Photo} alt="Logo" />
                </div>
                <div className="form">
                    <h1>Connect With Our Sales Team.</h1>
                    <p>Our sales team always active to support you. Any kind of questions about to our product they can answer to you.</p>
                    <div className="plat1">
                        <input type="text" id="fname" name="fname" placeholder="First Name" />
                        <input type="text" id="lname" name="lname" placeholder="Last Name" />
                    </div>
                    <div className="plat2">
                        <input type="email" id="email" name="email" placeholder="Email Address" />
                        <input type="tell" id="phone" name="phone" placeholder="Phone" />
                    </div>  

                    <textarea name="message" rows="10" cols="30">
                         Your Text
                    </textarea>

                    
                     <input type="submit" value="Submit" />
                </div>        
            </div>
        )
    }
}
export default Connect;