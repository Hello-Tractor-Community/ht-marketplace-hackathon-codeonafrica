import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { MdSearch } from 'react-icons/md'

const SearchComponent = () => {
  return (
    <div>
      <div className=''>
    <h2></h2>
            
        <form className='' action="">
        <label htmlFor="">Search for Tractor by brand Name ie. 'john deere'</label>  
            <div className='mt-2  gap-2 px-2 flex items-center py-4 border border-orange-500'>
                <MdSearch className='text-orange-500' size="24"/>
                <input type="text" className='w-full focus:outline none' placeholder='Search tractor' name="" id="" />
            </div>
            <div className='mt-8'>
                <h2 className='font-semibold text-sm py-2 font-serif'>Filter by Budget</h2>
                <ul className='flex flex-wrap items-center gap-4'>
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
    </div></div>
  )
}

export default SearchComponent