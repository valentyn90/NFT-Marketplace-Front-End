import Link from 'next/link'
import { Images } from "../../envaironmnet"


const CryptoCoins = () => {
    return (
        <div className='max-w-screen-lg m-auto bg-lightGray '>
            <div className='grid lg:grid-cols-5 md:grid-cols-2  mt-5 py-10 md:mx-0 mx-4'>
                <div className='flex items-center lg:justify-start justify-center cursor-pointer'>
                    <Link href='https://bitcoin.org/en/'>
                        <a className='target'>
                           <img  src={Images.Btc}/>
                        </a>    
                    </Link> 
                </div>
                <div className='flex items-center lg:justify-start justify-center cursor-pointer'>
                    <Link href='https://www.blockchain.com/'>
                        <a className='target'>
                             <img  src={Images.Blockchain3}/>
                        </a>    
                    </Link> 
                </div>
                <div className='flex items-center lg:justify-start justify-center cursor-pointer'>
                    <Link href='https://www.theatretokens.com/'>
                        <a className='target'>
                            <img  src={Images.Tether}/>
                        </a>    
                    </Link> 
                </div>
                <div className='flex items-center lg:justify-start justify-center cursor-pointer'>
                    <Link href='https://shibatoken.com/'>
                        <a className='target'>
                            <img  src={Images.Shiba}/>
                        </a>    
                    </Link> 
                </div>
                <div className='flex items-center lg:justify-start justify-center cursor-pointer'>
                    <Link href='https://ethereum.org/en/'>
                        <a className='target'>
                           <img  src={Images.Etherum}/>
                        </a>    
                    </Link> 
                </div>
             
            </div>
        </div>
    )
}

export default CryptoCoins