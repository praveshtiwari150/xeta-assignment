import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MilesWalkedChart = ({ walkdata }) => {
    return (
        <div className="bg-[#3D73AF] h-max font-inter  my-10 rounded-lg">
            <div className=" flex flex-col ml-6 mt-3 items-start text-white text-[35px] font-[400] my-4">
                <span>Miles Walked</span>
                <span>17,34</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={walkdata}>
                    <XAxis
                        dataKey="day"
                        stroke="#ffffff"
                        axisLine={false}
                        tickLine={false}

                    />
                    <YAxis
                        stroke="#ffffff"
                        tick={false}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="miles" stroke="#FFA500" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default MilesWalkedChart
