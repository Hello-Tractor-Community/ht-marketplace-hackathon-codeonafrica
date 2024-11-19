import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { CiFilter } from "react-icons/ci";


const SearchSection = () => {
  return (
    <div className="w-3/4 mx-auto">
        
        <div className='text-center space-y-4 mb-8'>
            <h2 className="text-4xl font-serif font-bold">Find Whats Fits You</h2>
            <p>Select the features that matter most to you, and we’ll do the rest!</p>
        </div>
        {/*Search  */}
        <div>
        <h2></h2>
                
            <form className='w-3/4 mx-auto' action="">
            <label htmlFor="">Search for Tractor by brand Name ie. 'john deere'</label>  
                <div className='mt-2  gap-2 px-2 flex items-center py-4 border border-orange-500'>
                    <MdSearch className='text-orange-500' size="24"/>
                    <input type="text" className='w-full focus:outline none' placeholder='Search tractor' name="" id="" />
                </div>
                <div className='mt-8'>
                    <h2 className='font-semibold text-sm py-2 font-serif'>Filter by Budget</h2>
                    <ul className='flex items-center gap-4'>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>0 - 500K</li>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>500K - 1M</li>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>1 - 2M</li>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>2 - 3M</li>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>3M - 5M</li>
                        <li className=' border hover:bg-orange-100 hover:border-bg-orange-200 hover:border p-2'>5M - 10M</li>
                    </ul>
                </div>

                <div className='mt-8'>
                    <span className='flex justify-between py-2 items-center'>
                        <p className='font-semibold text-sm font-serif'>Click here for Advanced Search</p>
                        <CiFilter className='hover:text-orange-500'/>
                    </span>
                    <hr />
                </div>

                <button className='w-full bg-black text-white text-center hover:bg-[#ff481d] py-3 mt-2 duration-300 transition-all '> Search</button>
            </form>
        </div>
    </div>
  )
}

export default SearchSection