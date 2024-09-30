import React from 'react'

const HeroBanner = ({ heading, description }) => {
  return (
    <div className={'md:w-[600px] flex flex-col items-center justify-center'}>
      <div className='text-center italic font-extrabold text-5xl text-white'>{heading}</div>
      <div className='text-center text-white font-poppins font-light text-sm'>{description}</div>
    </div>
  )
}

export default HeroBanner
