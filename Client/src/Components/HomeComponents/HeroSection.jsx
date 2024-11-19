import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className=' pt-12 h-[100vh] '>
      <div className='w-1/2 mx-auto grid items-center'>
        <h1 className='font-serif leading-snug  text-center text-[40px]'> The <strong>safest way</strong> to buy or sell your 
          <span className='bg-[#FF481D] rounded-md mx-2 px-2 text-white'>Tractor</span> in Kenya</h1>
          
          {/* button  */}
          <div className='grid grid-cols-3 gap-4 pt-8'>
            <button className='bg-black flex items-center gap-2 justify-center text-white py-3 hover:shadow-md text-md'>Explore Tractors<FaChevronDown size='16' className=''/></button>
            <button className=' border border-[#ff481d] flex items-center justify-center gap-2 text-[#ff481d]'>Hire a Tractor<FaChevronDown size='16' /></button>
            <button className=' border border-[#ff481d] text-[#ff481d]'>Sell Tractor</button>
          </div>
          </div>
          <h2 className='uppercase font-bold text-[20vh] px-40 text-center z-0 mx-auto absolute bottom-0 opacity-15 '>Hello Tractor</h2>
          <img src="tractor.png" className='h-[56vh] relative z-5  bottom-0 mx-auto' alt="" />
          
      
    </div>
  )
}

export default HeroSection