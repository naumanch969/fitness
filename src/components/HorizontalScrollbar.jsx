import { Box, Typography } from "@mui/material"
import BodyPart from "./BodyPart"
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import ExerciseCard from "./ExerciseCard"
import Slider from '@mui/material/Slider';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useRef } from 'react';

// body part mean category
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};



const HorizontalScrollbar = ({ data, Component }) => {


    return (
        <div className="flex justify-start w-full max-w-[90vw] overflow-x-scroll  " >

            <div className="flex md:gap-[2rem] gap-[1rem] p-[1rem] " >
                {
                    data?.map((item, index) => (
                        <Component item={item} key={index} />
                    ))}
            </div>
        </div>

    )
}      // data is array of all the categories/bodyParts



export default HorizontalScrollbar
