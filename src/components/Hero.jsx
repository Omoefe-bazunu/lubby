import React from 'react'
import bg33 from '../../../assets/bg33.png';


const Hero = () => {
  return (
    <div className='Hero w-full h-fit px-20 py-5 flex justify-center align-center mt-40 gap-x-5'>
        <div className='leftHero flex flex-col justify-center align-center gap-y-5'>
            <div className='flex flex-col justify-center align-center gap-y-5 '>
                <h1 className='main-text xl:text-6xl lg:text-5xl md:text-4xl text-3xl whitespace-normal font-light'>Get the best <br /><span className='font-semibold'>Tech Gadgets</span> with your budget from flexible deals</h1>
                <p className='Hero-paragraph text-md font-light'>Find your choice tech gadget and get the best experience</p>
            </div>
            <div className='action-btn flex justify-start w-fit align-center cursor-pointer'>
                <div className='order-btn text-md font-light flex align-center justify-center bg-rose-700 self-center w-fit h-fit py-2 px-8 rounded-3xl mr-10'>Order Now</div>
                <div className='play flex justify-start align-center gap-x-4'>
                    <p className='text-md font-light py-2 flex align-center justify-center w-fit h-fit'><span className='mr-3'><i className="fa-solid fa-play"></i></span>See samples</p>
                </div>
            </div>
        </div>
        <div className='featuredImage flex justify-start align-center'>
            <img src={bg33} alt='featured-Image' className='ImageFeat lg:w-full lg:h-full min-w-3/5 min-h-5/6'/>
        </div>
    </div>
  )
}

export default Hero