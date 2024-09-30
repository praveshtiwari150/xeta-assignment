import React from 'react';
import fitsnapLogo from "../assets/fitsnapLogo.svg"
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HomepageFooter = () => {
    return (
        <div className='bg-black text-white py-8 min-w-full'>
            <div className='flex flex-col md:flex-row justify-center items-start md:items-center h-full'>
                <div className='w-full md:w-[50%] flex flex-col justify-center items-start gap-8 p-4'>
                    <div className='text-3xl mx-4 font-semibold w-full md:w-[450px]'>
                        Want to install FitSnap AI Camera in your GYM? Please submit your details below.
                    </div>
                    <div className='text-sm mx-4 font-lato font-[500] w-full md:w-3/4'>
                        Want to install FitSnap AI Camera in your GYM? Please submit your details below.
                    </div>
                </div>
                <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center p-4">
                    <form className='flex flex-col justify-between items-start h-full w-full' action="">
                        <div className='mb-4 p-4 w-full'>
                            <label htmlFor="gym" className='block'>Name Of Gym</label>
                            <input id="gym" className="bg-black border-b-[1px] border-b-white text-white outline-none w-full md:w-3/4" type="text" />
                        </div>
                        <div className='mb-4 p-4 w-full'>
                            <label htmlFor="location" className='block'>Location</label>
                            <input id="location" className="bg-black border-b-[1px] border-b-white text-white outline-none w-full md:w-3/4" type="text" />
                        </div>
                        <div className='mb-4 p-4 w-full'>
                            <label htmlFor="name" className='block'>Your Name</label>
                            <input id="name" className="bg-black border-b-[1px] border-b-white text-white outline-none w-full md:w-3/4" type="text" />
                        </div>
                        <div className='mb-4 p-4 w-full'>
                            <label htmlFor="email" className='block'>Email</label>
                            <input id="email" className="bg-black border-b-[1px] border-b-white text-white outline-none w-full md:w-3/4" type="text" />
                        </div>
                        <div className='mb-4 p-4'>
                            <button className='bg-white hover:bg-gray-200 rounded-full text-black py-2 px-4'>Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="section-2 font-roboto">
                <div className='parent  flex flex-col-reverse md:flex-row justify-between items-start gap-4 my-2 mx-4 h-full'>
                    <div className='child-1 flex flex-col flex-1 gap-2 justify-center items-start h-full'>
                        <div>
                            <img className='' src={fitsnapLogo} alt="" />
                        </div>
                        <div className='w-full md:w-[420px] px-4 flex flex-col gap-2'>
                            <div className='text-3xl font-semibold'>Get FitSnap</div>
                            <div className='text-sm font-light'>
                                Be the first to test the first AI personal trainer, ever! Keep up to date with the launch, new workouts and further details by joining our mailing list.
                            </div>
                        </div>
                        <div className='flex px-4 pt-2 gap-4 text-xl'>
                            <FaFacebook />
                            <FaYoutube />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>

                    <div className='child-2 flex flex-col justify-between items-start gap-4 flex-1 h-full'>
                        <div className='p-4'>
                            <div className='font-semibold text-lg pb-1'>Download The App</div>
                            <div className='font-light text-xl'>Android - Google Play Store</div>
                            <div className='font-light text-xl'>iOS - Apple App Store</div>
                        </div>
                        <div className='p-4 flex flex-col justify-between items-start gap-2'>
                            <div className='text-lg font-semibold'>Contact</div>
                            <div className='text-xl font-light'>1600 Amphitheatre Parkway in Mountain View, California.</div>
                            <div className='text-xl font-light'>+91 0000000000</div>
                        </div>
                    </div>

                    <div className='child-3 p-4 flex flex-col justify-start items-start gap-4 flex-1 h-full'>
                        <div className='text-lg font-semibold'>Company</div>
                        <div className='text-xl font-light flex flex-col justify-between items-start gap-1'>
                            <div>About Us</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                            <div>Community Guidelines</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomepageFooter;
