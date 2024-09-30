import React from 'react'
import HeaderSection from './HeaderSection'
import PromotionCanvas from './PromotionCanvas'

const Promotional = () => {
    return (
        <div className='w-full'>
            <div className='p-4'>
                <HeaderSection
                    heading={"Stay fit and motivated with us"}
                    headingSize={"text-5xl"}
                    subHeading={"Discover Top Fitness Insights and Daily Motivation"}
                    subHeadingSize={"text-2xl"}
                />
            </div>
            <div className=''>
                <PromotionCanvas />
            </div>
        </div>
    )
}

export default Promotional
