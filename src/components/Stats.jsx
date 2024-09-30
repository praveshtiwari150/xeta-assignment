import React from 'react'
import enrolle from '../assets/statsIcons/enrolle.gif'
import time from '../assets/statsIcons/time.gif'
import session from '../assets/statsIcons/session.gif'
import Wave from './Wave'
import StatCard from './StatCard'
const data = [
  {
    id: 1,
    label: 'Gym Enrolled',
    count: '50+',
    icon: enrolle
  },
  {
    id: 2,
    label: 'Users Enroll',
    count: '250+',
    icon: time
  },
  {
    id: 3,
    label: 'Workout Sessions',
    count: '60+',
    icon: session
  }
]

const Stats = () => {
  return (
    <div className='pt-4 pb-4'>
      <div className='relative'>
        <Wave />
      </div>
      <div className='w-full pt-4 pb-4 flex justify-center items-center'>
        <div className=' flex flex-col md:flex-row gap-6 md:gap-1 justify-between md:w-[1024px]'>
          {
            data.map(item => (
              <StatCard
                key={item.id}
                count={item.count}
                label={item.label}
                icon={item.icon}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Stats
