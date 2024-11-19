import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import SearchSection from '../Components/HomeComponents/SearchSection'
import Dealerships from '../Components/HomeComponents/Dealerships'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <SearchSection/>
      <Dealerships/>
    </div>
  )
}

export default HomePage