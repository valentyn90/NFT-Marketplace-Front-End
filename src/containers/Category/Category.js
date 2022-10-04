import { Images } from "../../envaironmnet"


const Category = () => {

    const categories = [
        {imageCategoryUrl: Images.Cat1},
        {imageCategoryUrl: Images.Cat2},
        {imageCategoryUrl: Images.Cat3},
        {imageCategoryUrl: Images.Cat4},
        {imageCategoryUrl: Images.Cat5},
        {imageCategoryUrl: Images.Cat6},
        {imageCategoryUrl: Images.Cat7},
        {imageCategoryUrl: Images.Cat8},
        {imageCategoryUrl: Images.Cat9},
        {imageCategoryUrl: Images.Cat11},
        {imageCategoryUrl: Images.Cat12},
        {imageCategoryUrl: Images.Cat13},
        {imageCategoryUrl: Images.Cat14},
        {imageCategoryUrl: Images.Cat15},
        {imageCategoryUrl: Images.Cat16},
        {imageCategoryUrl: Images.Cat17},
    ]


    return (
        <div className="max-w-screen-lg  mt-20 md:mx-auto mx-4">
           <div className='flex flex-col text-center mt-4  mb-14'>
                <span className='text-darkGray font-Montserrat  text-5xl font-bold leading-normal'>
                     Browse by category              
                </span>
                <span className='text-darkGray font-Montserrat  text-lg mt-6'>
                    This NFT website is a website that features buying and selling, news and blogs. <br/>
                    Designed with a minimalist and informative concept
                </span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 cursor-pointer">
                {categories.map((item,key) => (
                    <div className='flex justify-center  transform hover:rotate-180' key={`${item.imageCategoryUrl}+${key}`} >
                        <img src={item.imageCategoryUrl}/>
                    </div>   
                ))}
            </div>

        </div>
    )
}

export default Category