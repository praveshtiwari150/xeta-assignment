import React from 'react'

const HeaderSection = ({ heading, subHeading, headingSize, subHeadingSize }) => {
  return (
    <div className='flex flex-col  justify-center items-center gap-4'>
      <div className={`${headingSize} text-center font-semibold`}>
        {heading}
      </div>
      <div className={`${subHeadingSize} text-center font-medium`}>
        {subHeading}
      </div>
    </div>
  )
}

export default HeaderSection
