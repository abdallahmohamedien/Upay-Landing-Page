import React , {Component}  from "react";
import Photo from '../images/Groups.png'

class Connect extends Component{
    render(){
        return(
            <div className="md:flex grid  w-auto md:-mr-0 -mr-28 md:ml-0 bg-[#FFFEF0] mt-4">
                <div className="bg-[#FFFEF0]">
                    <img src={Photo} alt="Logo" />
                </div>
                <div className="bg-[#FFFEF0] p-4">
                    <h1 className="text-5xl mb-4 mt-4">Connect With Our Sales Team.</h1>
                    <p className="mb-4 text-sm">Our sales team always active to support you. Any kind of questions about to our product they can answer to you.</p>
                    <div className="md:flex grid grid-cols mb-10 ">
                        <input type="text" id="fname" name="fname" placeholder="First Name" className="border-2 md:w-72 h-14 p-2 bg-[#FFFEF0]"/><br /><br />
                        <input type="text" id="lname" name="lname" placeholder="Last Name" className="border-2 h-14 md:w-72 md:ml-6 px-2 p-2 bg-[#FFFEF0]"/>
                    </div>
                    <div className="md:flex grid grid-cols ">
                        <input type="email" id="email" name="email" placeholder="Email Address" className="border-2 h-14 md:w-72 bg-[#FFFEF0] p-2"/><br /><br />
                        <input type="tell" id="phone" name="phone" placeholder="Phone" className="border-2 h-14 md:w-72 bg-[#FFFEF0] md:ml-6 p-2"/>
                    </div>  
                    <textarea name="message" rows="10" cols="" className="h-28 mt-6 w-96 border-2 bg-[#FFFEF0]">
                        Your Text
                    </textarea><br />
                    <input type="checkbox" /> I agree that braintree may contact me at the email address or phone number above. <br />
                    <div className='mt-10 ml-6 bg-[#333215] hover:bg-b shadow-lg md:w-auto font-medium w-96 md:mr-28 h-11 rounded-xl text-sm py-2.5'>
                        <a href="lo" className='flex justify-center rounded-lg text-sm text-white font-semibold mb-4'>Submit</a>
                    </div>
                </div>        
            </div>
        )
    }
}
export default Connect;