import React from 'react'
import HeaderSection from './HeaderSection';
import check from "../assets/check.svg"
import { MdArrowOutward } from "react-icons/md";

const KeyHighlightss = () => {

  const features = ["24*7 AI Trainer", "Unlimited Access", "150+ Exercise", "Customized Plans", "Advanced AI Camera", "Voice Feedback", "Complete Plans", "Real Time Feedback", "Rep Counter", "Saved Workout Videos", "Activity History", "Voice Commands"]

  return (
    <div className='mt-8 w-full'>
      <div className='p-4 flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl text-center italic tracking-widest'>
        REVOLUTIONSIZE YOU
      </div>
      <div className=''>
        <div>
          <div className='flex justify-center items-center'>
            <HeaderSection
              heading={"FACILITIES OFFERED"}
              headingSize={"text-4xl md:text-5xl"}
            />
          </div>

          <div className='min-h-[483px] flex flex-col md:flex-row gap-2  justify-between items-center'>
            <div className='w-[50%] flex  justify-center items-center '>
              <div className='w-[364px] border border-indigo-800 rounded-xl p-4'>
                {features.map((feature, index) => {

                  return (
                    <div
                      key={index}
                      className='flex justify-between items-center'
                    >
                      <div className='text-xs font-inter font-semibold m-2'>
                        {feature}
                      </div>
                      <div>
                        <img
                          className='size-4'
                          src={check} alt="" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='w-[50%] flex justify-start items-center'>
              <div className='p-4 flex flex-col gap-4  justify-between items-start min-h-[238px] lg:w-[460px]'>
                <div className='font-[500] text-xl capitalize'>To benefits of all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance, display quality  </div>
                <button className='p-2 border-2 text-sm sm:text-xl  border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:text-indigo-800 rounded-full flex justify-center items-center '>
                  <span className='font-[500]'>Download Brochore</span>
                  <MdArrowOutward
                    className='font-[500] text-lg sm:text-xl'
                  />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyHighlightss
