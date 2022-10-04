import { useEffect, useState } from "react"
import { Avatar } from "../../components/common/Avatar/Avatar"
import { Button } from "../../components/common/Button/Button"
import { Images } from "../../envaironmnet"

const { default: Header } = require("../../components/Header/Header")


const MainPage = () => {
    
    const [btnActive, setBtnActive] = useState('explore')

    const handleName = (e) => {
        setBtnActive(e.target.value)
        console.log(btnActive)
    }

   

    return (
        <div 
            className="bg-no-repeat bg-cover bg-center  mx-auto "
            style={{backgroundImage: `url(${Images.Background}`}} 
        >
            <div className='max-w-screen-lg md:mx-auto pb-32 mx-4'>
                <Header />
                <div className='flex flex-col md:mt-36 mt-16'>
                    <span className='text-white text-bold font-Montserrat leading-normal text-5xl'>
                        The Home of <br/>
                        Minimalist Buying <br/>
                        and Selling 
                    </span>
                    <span className="text-white text-lg font-Montserrat">
                        This NFT website is a website that features <br/>
                         buying and selling, news and blogs.<br/>
                          Designed with a minimalist and  <br/>
                          informative concept
                    </span>
                    <div className="mt-10 md:flex md:flex-row flex-col justify-between">
                        <div>
                            <Button 
                                title={"Explore"}
                                value={'explore'}
                                onClick={handleName}
                                className={`bg-gradient-to-r from-orange1 to-orange2 mr-5`}
                            />
                            <Button 
                                title={"Create"}
                                value={'create'}
                                onClick={handleName}
                                className={`border-2 border-orange1`}



                            />
                        </div>
                       
                        <div className='flex flex-col rounded-xl bg-gradient-to-r from-blue2  to-blue1  md:-mt-28 mt-16 w-64 h-48'>
                            <div className="ml-7 mt-5 mb-6 ">
                                <div>
                                    <span className="text-white text-bold font-Montserrat text-lg ">Current price</span>
                                </div>
                                <div className='flex items-center mt-4 animate-bounce'>
                                    <div>
                                        <span className="text-2xl text-bold font-Montserrat text-white">
                                            1.98 
                                        </span>
                                    </div>
                                    <div>
                                     <span className='text-base ont-Montserrat text-white ml-3.5'>($5,822.47)</span>
                                    </div>
                                
                                </div>
                              
                            </div>
                            
                            <div className="flex items-center ml-7 cursor-pointer">
                                <Avatar 
                                    src={Images.Profile1}
                                />
                                <span className='ml-4 font-bold font-Montserrat text-base text-white'>Wade Warren</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage