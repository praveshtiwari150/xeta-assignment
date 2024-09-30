import React from 'react'
import workoutvid from "../assets/workoutvid.mp4"
import HeroBanner from './HeroBanner'
import Wave from './Wave'
const HeroSection = () => {
    return (
        <div>
            <video src={workoutvid}
                className='w-full h-[100vh] object-cover'
                autoPlay
                loop
                muted
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className={'absolute top-0 flex flex-col justify-center items-center w-full h-full'}>
                <HeroBanner
                    heading={"Fitsnap for GYM"}
                    description={"Welcome to the next generation of fitness! At FitSnap, we are thrilled to introduce the power of Artificial Intelligence (AI) to revolutionize your gym experience."}
                />
            </div>
        </div>
    )
}

export default HeroSection
