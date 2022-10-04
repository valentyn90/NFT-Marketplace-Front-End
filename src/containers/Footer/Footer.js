

const Footer = () => {
    return (
        <div className='max-w-screen-lg m-auto md:mt-36 mt-20'>
            <div className='md:flex md:flex-row flex-col md:mx-0 mx-4'>
                    <div className="flex flex-col  mr-20">
                        <div className='flex mb-8'>
                            <div className="bg-gradient-to-r from-blue1 to-blue2 w-10 h-10 rounded-full mr-4"/>
                            <span className='text-lg text-darkGray font-Montserrat font-bold'>
                                <a>NFT.Ring</a>
                            </span>
                        </div>
                       
                        <span className='text-darkGray font-Montserrat text-lg'>
                            The world’s first and largest digital <br/>
                            marketplace for crypto collectibles <br/>
                            and non-fungible tokens (NFTs). <br/>
                            Buy, sell, and discover exclusive digital assets.
                        </span>
                    </div>
                    <div className="flex flex-col  mr-20">
                        <div className='flex md:mb-8 mb-2 md:mt-0 mt-10 '>
                            <span className='text-lg text-darkGray font-Montserrat font-bold'>
                                <a>Marketplace</a>
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span>All NFTs</span>
                            <span>Art</span>
                            <span>Music</span>
                            <span>Sports</span>
                            <span>Trading Cards</span>

                        </div>
                    </div>
                    <div className="flex flex-col  mr-20">
                    <div className='flex md:mb-8 mb-2 md:mt-0 mt-10 '>
                            <span className='text-lg text-darkGray font-Montserrat font-bold'>
                                <a>My Account</a>
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span>My Profile</span>
                            <span>My Collections</span>
                            <span>My Favorites</span>
                            <span>My Account Settings</span>
                        </div>
                    </div>
                    <div className="flex flex-col  mr-20">
                    <div className='flex md:mb-8 mb-2 md:mt-0 mt-10 '>
                            <span className='text-lg text-darkGray font-Montserrat font-bold'>
                                <a>Resources</a>
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span>Help Center</span>
                            <span>Partners</span>
                            <span>Blog</span>
                            <span>Docs</span>
                            <span>Newsletter</span>

                        </div>
                    </div>

            </div>

        </div>
    )
}

export default Footer