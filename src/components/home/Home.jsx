import React from 'react'
import HeroSection from '../HeroSection'
import SectionDivider from '../SectionDivider'
import Services from '../Services'
import Team from './Team'

const Home = () => {
  return (
    <div>
         <div className="w-[90%] mx-auto">
          <HeroSection />
        </div>

       

        <SectionDivider />

        <div className="w-[90%] mx-auto">
          <Services/> 
        </div>

        

        <div className="w-[90%] mx-auto ">
          
          <Team />
                
        </div>
    </div>
  )
}

export default Home