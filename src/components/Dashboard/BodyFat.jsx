import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


const BodyFat = () => {
    const score = 12;

    return (
        <div className='bg-white shadow-lg rounded-xl h-full'>
            <div className='p-8 font-inter text-[35px] font-[400]'>
                Body Fat
            </div>
            <div className='font-inter text-center text-[35px] font-[400]'>
                12%
            </div>
        </div>
    );
};

export default BodyFat;
