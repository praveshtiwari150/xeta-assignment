import React from 'react'
import HeaderSection from './HeaderSection'
import Poster from './Poster'

const Brochure = () => {
  return (
    <div className='w-full pt-4 pb-4'>
      <div className='p-4'>
        <HeaderSection
          heading={"WHY CHOOSE FITSNAP"}
          headingSize={"text-6xl"}
          subHeading={"GET REAL TIME UPDATE WITH AI"}
          subHeadingSize={"text-2xl"}
        />
      </div>
      <div>
        <Poster />
      </div>
    </div>
  )
}

export default Brochure
