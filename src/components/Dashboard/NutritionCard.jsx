import React from 'react'

const NutritionCard = ({ nutritionalData }) => {
  const dummy = {
    id: 1,
    catg: 'calories',
    value: 1930,
    icon: ''
  }
  return (
    <div className='flex m-4 flex-col sm:flex-row justify-between'>
      {
        nutritionalData.map(item => (
          <div className='m-3 flex flex-1  justify-center items-center rounded-xl shadow-lg gap-2 bg-white'>
            <div className=' bg-slate-100 rounded-xl shadow-sm flex justify-center items-center mt-2'>
              <img className='p-[20px]' src={item.icon} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
              <div className='text-3xl font-medium font-inter'>{item.value}</div>
              <div className='flex flex-col justify-center items-start gap-1 text-xl text-gray-500 font-light font-inter'>
                <span>Avg.</span>
                <span className='capitalize'>{item.catg}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NutritionCard
