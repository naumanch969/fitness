import React from 'react';
import { scroller } from 'react-scroll'
import heroBannerImage from '../../assets/images/banner.png';

const HeroBanner = () => {

    const handleClick = () => {
        scroller.scrollTo('exercises', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutCubic',
        });

    }


    return (
        <div className="flex md:min-h-[40rem] sm:min-h-[] ">
            <div className="flex flex-col md:justify-start justify-center pt-[3rem] md:items-start items-center md:w-[50%] w-full sm:h-[25rem] h-[24rem] p-[1rem] lg:pl-[5rem] md:pl-[3rem] flex-shrink-0  ">
                <h1 className="text-light-red font-semibold text-[26px]">
                    Fitness Club
                </h1>
                <h1 className="font-bold lg:text-[60px] md:text-[44px] sm:text-[44px] text-[40px]">
                    Sweat Smile <br /> And Repeat
                </h1>
                <p className="text-[22px] mb-3 leading-[30px] md:text-start text-center ">
                    Check out the most effective exercises
                </p>
                <button onClick={handleClick} className="inline-block md:px-[20px] px-[16px] md:py-[12px] py-[8px] mt-[16px] text-white bg-light-red hover:bg-red-700 rounded" >
                    Explore Exercises
                </button>
                <p className="font-semibold lg:text-[12rem] md:text-[10rem] relative lg:bottom-[1rem] md:bottom-[-2rem] lg:left-[1rem] text-light-red opacity-20 ml-[20px] hidden md:block lg:pt-[0rem] md:pt-[1rem] pb-[2rem]">
                    Exercise
                </p>
            </div>
            <div className="md:block hidden absolute top-0 right-0 w-[50%] h-[40rem]  ">
                <img className="w-full h-full " src={heroBannerImage} alt="banner image" />
            </div>
        </div>
    );
};

export default HeroBanner;
