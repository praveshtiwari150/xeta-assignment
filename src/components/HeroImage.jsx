import React from 'react'
import HeaderSection from './HeaderSection'
import frame from '../assets/frame.png'
import { FaCircle } from "react-icons/fa6";
const HeroImage = () => {
  return (
    <div className=' mt-16'>
      <div className='p-4'>
        <HeaderSection
          heading={"THINGS YOU NEED"}
          headingSize={"text-5xl"}
          className={"p-4"}
        />
      </div>
      <div className="relative mt-4 w-full">
        <div>
          <img src={frame} alt="Workout" className="w-full h-[380px] md:h-[800px] object-cover" />
          <div className="absolute inset-0 bg-white opacity-25"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
