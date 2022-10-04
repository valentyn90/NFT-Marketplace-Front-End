import { useState } from "react";

import { Button } from "../common/Button/Button"
import { BsList } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";



const Header = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    return (
            <div className='flex justify-between  items-center pt-4 lg:pt-12'>
                <div className="flex md:items-center">
              
                    <div className="flex items-center mr-20">
                        <div className="bg-gradient-to-r from-blue1 to-blue2 w-10 h-10 rounded-full md:mr-4 animate-spin"/>
                        <span className='font-Montserrat font-bold text-white md:pl-0 pl-2'>
                            <a>NFT.Ring</a>
                        </span>
                    </div>
                 
                    <div className='md:block hidden'>
                        <span className="mr-6 font-Montserrat text-white">
                            <a href='#'>Market</a>
                        </span>
                        <span className="mr-6 font-Montserrat text-white">
                            <a href='#'>Activity</a>
                        </span>
                        <span className="mr-6 font-Montserrat text-white">
                            <a href='#'>Feature</a>
                        </span>
                        <span className="mr-6 font-Montserrat text-white">
                            <a href='#'>Community</a>
                        </span>
                    </div>
                   
                </div>
            
                {
                    show && 
                    <div className='bg-white fixed left-0 right-0  top-0 w-screen h-32 transition-shadow		'>
                        <div className='mt-12 flex flex-col'>
                            <div className='flex justify-between w-10/12 m-auto text-center '>
                                <span className="mr-6 font-Montserrat text-darkGray">
                                    <a href='#'>Market</a>
                                </span>
                                <span className="mr-6 font-Montserrat text-whidarkGrayte">
                                    <a href='#'>Activity</a>
                                </span>
                                <span className="mr-6 font-Montserrat text-darkGray">
                                    <a href='#'>Feature</a>
                                </span>
                                <span className="mr-6 font-Montserrat text-darkGray">
                                    <a href='#'>Community</a>
                                </span>
                            </div>
                            <div className='mt-4 flex flex-grow cursor-pointer justify-end'>
                                <button onClick={() => setShow(false)}>
                                   <IoIosCloseCircle size={32}/>
                                </button>    
                            </div>        
                        </div>    
                       

                    </div>    
                }
               
               <div className='md:hidden flex justify-start'>
                        <BsList 
                            color='white' 
                            size={42}
                            onClick={() => setShow(true)}
                        />

                </div>
                <div className='md:block hidden'>
                    <Button 
                        title={'Login'}
                        className="bg-gradient-to-r from-orange1 to-orange2"
                    />
                </div>
              
               
              
            </div>

    )
}

export default Header