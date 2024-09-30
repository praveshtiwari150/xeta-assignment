import React from 'react'

const StatCard = ({ count, label, icon }) => {
  return (
    <div
      className='flex flex-col justify-center items-center'
    >
      <div className='flex justify-center  gap-2 items-center'>
        <img src={icon} className='size-16 md:size-24' alt="" />
        <div className='font-roboto text-2xl md:text-5xl  font-semibold'>{count}</div>
      </div>
      <div className='font-open-sans text-lg md:text-2xl text-semibold'>{label}</div>
    </div>
  )
}

export default StatCard
