import React from 'react';
import img1 from '../assets/brochure/1.png'
import vid2 from '../assets/brochure/2.mp4'
import img3 from '../assets/brochure/3.png'
import img4 from '../assets/brochure/4.png'

const Poster = () => {
    const elements = [
        {
            id: 1,
            imgpath: img1,
            heading: "Enhanced Focus On Individual Needs",
            description: "FitSnap: Ditch bad form, embrace perfect workouts. AI analyzes your moves in real-time for flawless fitness.",
            theme: "#7D8DC7"
        },
        {
            id: 2,
            vidpath: vid2,
            heading: "Data-Driven Insights",
            description: "Gain actionable insights through data analysis, driving smarter decisions and optimized performance for your business success.",
            theme: "#5E9ED7",
            type: 'video'
        },
        {
            id: 3,
            imgpath: img3,
            heading: "Efficient Workouts",
            description: "Achieve optimal results with streamlined, effective workout routines designed to maximize time and enhance performance.",
            theme: "#C46DA0"
        },
        {
            id: 4,
            imgpath: img4,
            heading: "Preventing Injuries",
            description: "Implementing preventative measures and strategies to minimize the risk of injuries during physical activities or workouts.",
            theme: "#69996A"
        }
    ];

    return (
        <div className='flex flex-col justify-center items-center m-12'>
            {elements.map(element => (
                <div
                    key={element.id}
                    style={{ backgroundColor: element.theme }}
                    className={`flex ${element.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col m-1 md:m-0`}>
                    {element.type === 'video' ?
                        <video src={element.vidpath}
                            className='w-full md:w-[50%] object-cover'
                            autoPlay
                            loop
                            muted
                        />
                        :
                        <img
                            src={element.imgpath}
                            alt={element.heading}
                            className=" w-full md:w-[50%]" />}
                    <div className='m-8 gap-2 md:gap-4 flex flex-col text-justify justify-center items-center'>
                        <div className="text-3xl md:text-5xl text-start text-white font-lato font-semibold">{element.heading}</div>
                        <p className='text-xl md:text-2xl font-lato text-white'>{element.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Poster;
