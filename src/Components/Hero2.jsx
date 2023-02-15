import React , {Component}  from "react";
import { MdCreditScore } from 'react-icons/md';
import { BsLightningCharge ,BsEmojiSmile} from 'react-icons/bs';
import {FaRegNewspaper} from 'react-icons/fa'


class Hero2 extends Component{
    render(){
        return(
            <div className="mt-6">
                <div className="">
                    <h1 className="font-bold text-4xl ml-36 md:px-96 md:ml-80">Why Upay</h1><br />
                    <p className="md:px-64 ml-28 md:ml-56">Please add a amount an account with whom you want to 
                        send your money and we will keep it very safe.
                    </p>
                </div>
                <div className='grid md:grid-cols-2 ml-16 md:ml-64'>
                        <div className='w-96 p-10 border-2 mt-8 mb-4 rounded-lg hover:bg-[#C9ECDC] hover:shadow-xl'>
                            <h1 className="flex text-2xl items-center mb-4"> <span> <MdCreditScore size={50} className=
                            ""/></span><span className="ml-4"> Secure</span></h1>
                            <p className="text-sm mb-4">Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.
                            </p>
                            <a href='#learn' className="font-semibold">Learn more...</a>
                        </div>
                        <div className='w-96 p-10 mb-4 mt-8 border-2 rounded-lg hover:bg-[#C9ECDC] hover:shadow-xl'>
                            <h1 className="flex text-2xl items-center mb-4"> <span><BsLightningCharge size={50}/> </span><span className="ml-4">Instant</span></h1>
                            <p className="text-sm mb-4">
                                Upay transactions are protected by the latest encryption and security technology. We also leverage Plaid to keep businesses in our database safe.
                            </p>
                            <a href='#learn' className="font-semibold">Learn more...</a>
                        </div>
                </div>
                <div className="grid md:grid-cols-2 ml-16 md:ml-64">
                    <div className='w-96 p-10 mb-12 border-2 rounded-lg hover:bg-[#C9ECDC] hover:shadow-xl'>
                            <h1 className="flex text-2xl items-center mb-4"><span><FaRegNewspaper size={50}/> </span><span className="ml-4">Fee-Free</span></h1>
                            <p className="text-sm mb-4">
                                Upay transactions are protected by the latest encryption and security technology. We also leveragePlaid to keep businesses in our database safe.  
                            </p>
                            <a href='#learn' className="font-semibold">Learn more...</a>
                     </div>
                     <div className='w-96 p-10 mb-4 border-2 rounded-lg hover:bg-[#C9ECDC] hover:shadow-xl'>
                            <h1 className="flex text-2xl items-center mb-4"><span><BsEmojiSmile size={50}/> </span><span className="ml-4">Simple</span></h1>
                            <p className="text-sm mb-4">
                                Upay transactions are protected by the latest encryption and security technology. We also leveragePlaid to keep businesses in our database safe.  
                            </p>
                            <a href='#learn' className="font-semibold">Learn more...</a>
                     </div>
                </div>
            </div>
        )
    }
}
export default Hero2;