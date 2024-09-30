import React from 'react'
import HeaderSection from './HeaderSection'

const CustomerFeedback = () => {
    const feedback = [{
        id: 1,
        name: 'Riya Awasthi',
        image: 'https://images.unsplash.com/photo-1543932169-4a26c43dfaa4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        message: 'I love  FitSnap to train my daily excercise.It offers wide range of category that fit my needs.'
    },
    {
        id: 2,
        name: 'Aarav Patel',
        image: 'https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxtZW4lMjBmYWNlJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHww',
        message: 'FitSnap has transformed my workout routine. The personalized plans keep me motivated and on track!'
    },
    {
        id: 3,
        name: 'Neha Sharma',
        image: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtZW4lMjBmYWNlJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHww',
        message: 'The AI guidance on FitSnap is incredible! It feels like having a personal trainer at home.'
    }
    ]
    return (
        <div className='mt-8 flex flex-col items-center min-h-[480px]'>
            <div className='p-4 w-full sm:w-[768px]'>
                <HeaderSection
                    heading={"WHAT OUR CLIENT SAY ABOUT US"}
                    headingSize={"text-5xl"}
                />
            </div>
            <div className='p-4 flex flex-col md:flex-row justify-center items-center gap-2 '>
                {
                    feedback.map(customer => {
                        return (
                            <div key={customer.id}
                                className='flex flex-col justify-between p-12 border-[1.2px] border-indigo-800 max-w-[350px] h-[420px]'
                            >
                                <div className='text-start font-poppins font-[400]'>
                                    {customer.message}
                                </div>
                                <div className='flex justify-start items-center gap-2'>
                                    <div className=''>
                                        <img
                                            src={customer.image} alt=""
                                            className='size-14 rounded-full'
                                        />
                                    </div>
                                    <div className='font-poppins font-[400]'>
                                        {customer.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CustomerFeedback
