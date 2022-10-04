
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../envaironmnet";

const Blog = () => {

  
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className='max-w-screen-lg lg:m-auto mx-5'>
            <div className='flex flex-col text-center mt-4  mb-14'>
                <span className='text-darkGray font-Montserrat  text-5xl font-bold leading-normal'>
                    Exclusive NFT.Ring drops
                </span>
                <span className='text-darkGray font-Montserrat  text-lg mt-6'>
                    This NFT website is a website that features buying and selling, news and blogs. <br/>
                    Designed with a minimalist and informative concept
                </span>
            </div>
            <Slider {...settings}>
                <div className='relative md:pl-3 pl-0'>
                    <img src={Images.CaruselImage1} />
                    <div className='absolute bottom-0 left-0 bg-white'>
                        <div className='lg:px-14 lg:py-5 px-3 py-2'>
                        <span className='md:text-2xl text-sm text-darkGray font-Montserrat font-bold'>
                            What's in Store <br/>for NFT
                        </span>
                        </div>    
                       
                    </div>    
                </div>
                <div className='relative md:pl-3 pl-0'>
                    <img src={Images.CaruselImage2} />
                    <div className='absolute bottom-0 left-0 bg-white'>
                        <div className='lg:px-14 lg:py-5 px-3 py-2'>
                            <span className='md:text-2xl text-sm text-darkGray font-Montserrat font-bold'>
                                What's in Store <br/>for NFT
                            </span>
                        </div>  
                    </div>    
                </div>
                <div className='relative md:pl-3 pl-0'>
                    <img src={Images.CaruselImage1} />
                    <div className='absolute bottom-0 left-0 bg-white'>
                        <div className='lg:px-14 lg:py-5 px-3 py-2'>
                            <span className='md:text-2xl text-sm text-darkGray font-Montserrat font-bold'>
                                What's in Store <br/>for NFT
                            </span>
                        </div>  
                    </div>  
                </div>
                <div className='relative md:pl-3 pl-0'>
                    <img src={Images.CaruselImage2} />
                     <div className='absolute bottom-0 left-0 bg-white'>
                        <div className='lg:px-14 lg:py-5 px-3 py-2'>
                            <span className='md:text-2xl text-sm text-darkGray font-Montserrat font-bold'>
                                What's in Store <br/>for NFT
                            </span>
                        </div>  
                    </div> 
                </div>
                
            </Slider>
        </div>
    )
}

export default Blog