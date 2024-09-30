import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts'

const WeightChart = ({ weightProgress }) => {
    return (
        <div className='bg-white shadow-xl flex flex-col gap-1 rounded-xl'>
            <div className='ml-8 mt-4 font-inter text-[35px] font-[400]'>
                Body Weight
            </div>
            <div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        barGap={4}
                        barSize={6} // Adjust the bar width 
                        data={weightProgress}
                    >
                        <Legend
                            verticalAlign='top'
                            iconType='circle'
                            iconSize={9}
                            layout='horizontal'
                            wrapperStyle={{
                                width: "80%",
                                top: 0,
                                display: 'flex',
                                justifyContent: 'end',
                                gap: '2%'
                            }}
                        />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey={"month"}
                            tick={{ fill: '#9B9EAC', fontFamily: 'Inter', fontSize: '18px' }}
                            tickLine={false}
                        />
                        <YAxis
                            orientation="right"
                            domain={[67, 72]}
                            tick={{ fill: '#9B9EAC', fontFamily: 'Inter', fontSize: '18px' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }}
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                            }}
                            itemStyle={{
                                fontSize: '12px'
                            }}
                            labelStyle={{
                                fontSize: '12px'
                            }}
                        />
                        <Bar dataKey="weight" fill="#FAA057" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="goal" fill="#FACD57" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default WeightChart
